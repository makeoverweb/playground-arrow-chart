import { setupI18n, Catalog } from "@lingui/core";

const loc = setupI18n()

import(
  /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
  `locale/ru/messages.js`
  ).then((cat) => {
    loc.load('ru', cat as Catalog).then(() => {
        loc.activate('ru')
    })
})

export {
    loc
}