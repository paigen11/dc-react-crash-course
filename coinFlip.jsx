
var Coin = React.createClass({
		sides: [
        	'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
        	'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'
        ],

        getInitialState: function() {
        	
        	return{
        		image: this.sides[0]
        	};
        },

        flipCoin: function() {
        	var randomSide = Math.round(Math.random());
        	console.log(randomSide);
        	
        	this.setState({
        		image: this.sides[randomSide]
        		});
        },

        render: function() {
        	console.log(this.sides);
        	return(
        		<div>
        			<button onClick={this.flipCoin}>Flip Coin!</button>
        			<img src={this.state.image} />
        		</div>
        		);
		}
});

var App = React.createClass({
	render: function() {
		return(
			<Coin />
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('container')
);
