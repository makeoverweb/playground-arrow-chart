import marked from 'marked'

function ShouldRender(props) {
    return props.if ? (
        props.children
    ) : null;
}

export function FlatList(props) {
    const { list, listView } = props;
    const listIsArray = Array.isArray(list);
    const listItems = listIsArray ? list.map(listView) : [];
    props.prepend && listItems.unshift(props.prepend);
    props.append && listItems.push(props.append);
    return listIsArray ? listItems.filter(i => i !== null) : null;
}

export function ForLoop(props) {
    let { times, loopView } = props;
    const loopItems = [];
    for (let i = 0; i < times; i++) {
        loopItems.push(
            loopView(i)
        )
    }
    return loopItems;
}

export function injectScrollSetter(dispatch, view, fn) {
    return function (props) {
        dispatch({
            type: 'SET SCROLL TOP',
            payload: {
                [view]: document.scrollingElement.scrollTop
            }
        });
        fn(props);
    }
}

export function animateScroll(top) {
    let scrollPosition = 0;
    const scrollSpeed = 50;

    const y = setInterval(() => {
        if (scrollPosition >= top) clearInterval(y);
        document.scrollingElement.scrollTop = scrollPosition;
        scrollPosition += scrollSpeed;
    }, 0);
}

export function getProfilePictureUrl(props, origin) {
    return post => {
        if (post.userId === props.userId) {
            return props.profilePic || 'assets/img/user.png';
        }
        else {
            return post.profile_photo ?
                `${origin}/${post.profile_photo}` : 'assets/img/user.png';
        }
    };
}

export function calcTime(unix) {
    const timeDifference = Date.now() - (unix * 1000);
    let seconds: string | number = Math.floor(timeDifference / 1000);
    let minutes: string | number = seconds > 60 ? Math.floor(seconds / 60) : 0;
    let hours: string | number = minutes > 60 ? Math.floor(minutes / 60) : 0;
    let days: string | number = hours > 24 ? Math.floor(hours / 24) : 0;
    let weeks: string | number = days > 7 ? Math.floor(hours / 7) : 0;
    let months: string | number= weeks > 4 ? Math.floor(weeks / 4) : 0;
    let years: string | number = months > 12 ? Math.floor(months / 12) : 0;

    if (years > 0) {
        const s = years > 1 ? 's' : '';
        years = years === 1 ? 'a' : years;
        return `${years} year${s} ago`;
    }

    else if (months > 0) {
        const s = months > 1 ? 's' : '';
        months = months === 1 ? 'a' : months;
        return `${months} month${s} ago`;
    }

    else if (weeks > 0) {
        const s = weeks > 1 ? 's' : '';
        weeks = weeks === 1 ? 'a' : weeks;
        return `${weeks} week${s} ago`;
    }

    else if (days > 0) {
        const s = days > 1 ? 's' : '';
        days = days === 1 ? 'a' : days;
        return `${days} day${s} ago`;
    }

    else if (hours > 0) {
        const s = hours > 1 ? 's' : '';
        hours = hours === 1 ? 'a' : hours;
        return `${hours} hour${s} ago`;
    }

    else if (minutes > 0) {
        const s = minutes > 1 ? 's' : '';
        minutes = minutes === 1 ? 'a' : minutes;
        return `${minutes} minute${s} ago`;
    }

    else if (seconds > 30) {
        return `${seconds} seconds ago`;
    }

    else {
        return 'Just Now';
    }
}

function renderMarkdown(content, delimiter = '&ndash;&ndash;&ndash;') {
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        smartLists: true,
        smartypants: false,
        //TODO: reserved for future
        // highlight: function (code) {
        //     return hljs.highlightAuto(code).value
        // }
    })

    const rawMarkup = marked(content || delimiter)
    return {
        __html: rawMarkup
    }
}

export {
    ShouldRender,
    renderMarkdown
}
