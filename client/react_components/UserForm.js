var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory,
    axios = require('axios')

var Error = React.createClass({
    render: function(){
        return <p className='error'>{this.props.message}</p>
    }
})

var UserForm = React.createClass({
    getInitialState: function(){
        return{
            hasErrors: false,
            errors: [],
            error: ''
        }
    },
    handleFormSubmit: function(e){
        e.preventDefault()
        var newUser = e.target.elements[0].value
        var self = this;
        axios.post('users/create', {username: newUser})
            .then(function(res){
                if(res.data.errors){
                    self.setState({error: res.data.errors.username.message})
                    self.setState({
                        hasErrors: true,
                        errors: [<Error key={0} message={self.state.error}/>]
                    })
                }else{

                    hashHistory.push({pathname:'show'})
                }

            })
    },
    handleFocus: function(){
        this.setState({
            hasErrors: false
        })
    },
    handleChange: function(e){
        if(e.target.value != ''){
            this.setState({errors: []})
        }else{
            this.setState({errors: [<Error key={0} message={this.state.error}/>]})
        }
    },
    render: function(){
        var err = ''
        return(
            <form onSubmit={this.handleFormSubmit}>
                Username: <input className={this.state.hasErrors? 'user-create-inpt-errors' : 'user-create-inpt'} type='text' onFocus={this.handleFocus} onChange={this.handleChange}/>
                <input type='submit' value='Create User'/>
                {this.state.errors}
            </form>
        )
    }
})
module.exports = UserForm
