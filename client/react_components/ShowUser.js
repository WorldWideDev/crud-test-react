var axios = require('axios'),
    ReactRouter = require('react-router'),
    UserRow = require('./UserRow'),
    hashHistory = ReactRouter.hashHistory;

var ShowUser = React.createClass({
    getInitialState: function(){
        return {
            users: null
        }
    },
    componentDidMount: function(){
        this.handleUserQuery()
        console.log('component mounted');
    },
    handleUserQuery: function(){
        axios.get('users/index')
            .then((jsonRes) => this.handleUsers(jsonRes))
    },
    handleUsers(res){
        var self = this;
        let userList = res.data.map(function(result){
            return (
                <UserRow key={result._id} name={result.username} handleUserQuery={self.handleUserQuery}/>
            )
        })
        this.setState({
            users: userList
        })
    },
    render: function(){
        let users = this.state.users;
        return(
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
            </table>
        )
    }
})

module.exports = ShowUser
