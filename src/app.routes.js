import App from './components/App';
import CreateEvent from './pages/CreateEvent'
import Clock from './pages/Clock'

const routes = {
    path: '/',
    component: App,
    indexRoute: { component: CreateEvent },
    childRoutes:[
        {path:'/clock', component: Clock}
    ]
}

export default routes;