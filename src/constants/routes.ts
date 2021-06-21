const ROUTE_PREF = ''

interface StaticRoute {
    ROUTE: string
}

interface Route extends StaticRoute {
    PATH: string
    PERM?: Array<string>
    redirectTo?: (viewer, entity) => string | string
}

interface Routes {
    [key: string]: Route
}

interface StaticRoutes {
    [key: string]: StaticRoute
}

const STATIC_ROUTES: StaticRoutes = {
    PLAYGROUND: {
        ROUTE: `${ ROUTE_PREF }/playground`,
    },
    ARROW_CHART_PLAYGROUND: {
        ROUTE: `${ ROUTE_PREF }/arrow-chart`,
    }
}

export {
    ROUTE_PREF,
    STATIC_ROUTES,
    Route,
    Routes,
    StaticRoutes,
}
