import React from "react"
import escapeStringRegexp from "escape-string-regexp"
import styles from './styles.scss'
import cx from 'classnames'

function removeDiacritics(str: string, blacklist: string) {
    if (!String.prototype.normalize) {
        // Fall back to original string
        return str
    }

    if (!blacklist) {
        // No blacklist, just remove all
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    } else {
        const blacklistChars = blacklist.split('')

        // Remove all diacritics that are not a part of a blacklisted character
        // First char cannot be a diacritic
        return str.normalize('NFD').replace(/.[\u0300-\u036f]+/g, function (m) {
            return blacklistChars.indexOf(m.normalize()) > -1 ? m.normalize() : m[0]
        })
    }
}

interface IHighlightProps {
    search: string | boolean | number | RegExp
    caseSensitive?: boolean
    ignoreDiacritics?: boolean
    diacriticsBlacklist?: string
    matchElement?: string | React.ElementType
    matchStyle?: {}
    matchClass?: string
}

export const Highlight: React.FC<IHighlightProps> =
  ({
       caseSensitive = false,
       ignoreDiacritics = false,
       diacriticsBlacklist = '',
       matchElement = "span",
       matchClass,
       matchStyle = {},
       search,
       children
   }) => {

      let count = 0

      const renderElement = (subject) => {
          if (isScalar() && hasSearch()) {
              const search = getSearch()
              return highlightChildren(subject, search)
          }
          return children
      }

      const isScalar = function () {
          return (/string|number|boolean/).test(typeof children)
      }

      const hasSearch = function () {
          return (typeof search !== 'undefined') && search
      }

      const getSearch = function () {
          if (search instanceof RegExp) {
              return search
          }
          let flags = ''
          if (!caseSensitive) {
              flags += 'i'
          }

          let localSearch = search
          if (typeof search === 'string') {
              localSearch = escapeStringRegexp(localSearch as string)
          }

          if (ignoreDiacritics) {
              localSearch = removeDiacritics(localSearch as string, diacriticsBlacklist)
          }

          return new RegExp(localSearch as string, flags)

      }

      const getMatchBoundaries = (subject: string, search: RegExp) => {
          let matches = search.exec(subject)
          if (matches) {
              return {
                  first: matches.index,
                  last: matches.index + matches[0].length
              }
          }
          return null
      }

      const highlightChildren = function (subject: string, search: RegExp) {
          let children = []
          let remaining = subject

          while (remaining) {
              let remainingCleaned = (ignoreDiacritics
                  ? removeDiacritics(remaining, diacriticsBlacklist)
                  : remaining
              )

              if (!search.test(remainingCleaned)) {
                  children.push(renderPlain(remaining))
                  return children
              }

              const boundaries = getMatchBoundaries(remainingCleaned, search)

              if (boundaries.first === 0 && boundaries.last === 0) {
                  // Regex zero-width match
                  return children
              }

              // Capture the string that leads up to a match...
              let nonMatch = remaining.slice(0, boundaries.first)
              if (nonMatch) {
                  children.push(renderPlain(nonMatch))
              }

              // Now, capture the matching string...
              let match = remaining.slice(boundaries.first, boundaries.last)
              if (match) {
                  children.push(renderHighlight(match))
              }

              // And if there's anything left over, recursively run this method again.
              remaining = remaining.slice(boundaries.last)

          }

          return children
      }

      const renderPlain = function (string) {
          count++
          return React.createElement('span', { key: count, children: string })
      }

      const renderHighlight = function (string) {
         count++
          return React.createElement(matchElement, {
              key: count,
              className: cx(styles.highlight, matchClass),
              style: matchStyle,
              children: string
          })
      }

      return <span>{ renderElement(children) }</span>

  }