var axios = require('axios'),
    ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;

var UserRow = React.createClass({
    getInitialState: function(){
        return{
            isEdit: false
        }
    },
    handleDelete: function(){
        axios.post('users/delete', {username: this.props.name})
            .then(function(res){
                hashHistory.push({pathname: 'show'})
            })
        this.props.handleUserQuery()
    },
    onEditButtonPressed: function(){
        //this.refs.usernameInput.focus();
        this.setState({isEdit:true})
    },
    handleFocusOut: function(){
        this.setState({isEdit:false})
    },
    handleEdit: function(e){
        if(e.keyCode === 13){
            axios.post('users/edit', {newUsername: e.target.value, oldUsername: this.props.name})
                .then(function(res){
                    hashHistory.push({pathname: 'show'})
                })
            this.props.handleUserQuery()
            this.setState({isEdit:false})
        }
    },
    render: function(){
        return(!this.state.isEdit)?
        (
            <tr>
                <td>{this.props.name}</td>
                <td>
                    <button onClick={this.handleDelete}>DEL</button>
                    <button onClick={this.onEditButtonPressed}>EDIT</button>
                </td>
            </tr>
        ):
        (
            <tr>
                <td><input className='user-row-inpt' type='text' defaultValue={this.props.name} onKeyDown={this.handleEdit} autoFocus onBlur={this.handleFocusOut}/></td>
                <td>
                    <button onClick={this.handleDelete}>DEL</button>
                    <button onClick={this.handleEdit}>EDIT</button>
                </td>
            </tr>
        )

    }
})

module.exports = UserRow
