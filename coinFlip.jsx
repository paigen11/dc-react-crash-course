
var Coin = React.createClass({
		sides: [
        'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
        'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'
        ],
        flipCoin: function() {
        	console.log("flip coin");
        },
        render: function() {
        	console.log(this.sides);
        	return(
        		<div>
        			<button onClick={this.flipCoin}>Flip Coin!</button>
        			<h1>Coin goes here</h1>
        		</div>
        		)
		}
})

var App = React.createClass({
	render: function() {
		return(
			<Coin />
		)
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('container')
)
