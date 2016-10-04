var ReactRouter = require('react-router');

var Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    Link = ReactRouter.Link,
    hashHistory = ReactRouter.hashHistory,
    Redirect = ReactRouter.Redirect,
    IndexRoute = ReactRouter.IndexRoute

var UserForm = require('./UserForm'),
    ShowUser = require('./ShowUser')

var MainApp = React.createClass({
    render: function(){
        hashHistory.push('create')
        return (routes)
    }
})

var routes = (
    <Router history={hashHistory}>
        <Route path='/create' component={UserForm} />
        <Route path='/show' component={ShowUser} />
    </Router>
)

ReactDOM.render(
    <MainApp/>,
    document.getElementById('app')
)
