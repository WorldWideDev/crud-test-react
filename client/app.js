console.log(React)
var MyComponent = React.createClass({
    render: function(){
        return <p>YAY</p>
    }
})
ReactDOM.render(
    <MyComponent/>,
    document.getElementById('app')
)
