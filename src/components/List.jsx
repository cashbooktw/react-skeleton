var React = require('react');
var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpservice');

var List = React.createClass({
  getInitialState: function() {
    return {ingredients: []};
  },
  componentWillMount: function (){
    HTTP.get('/ingredients').then(function(data) {
      console.log("DATA: " + data);
      this.setState({ingredients: data});
    }.bind(this));
  },
  render: function(){
    var createItem = function(text, index) {
      return <ListItem key={index + text} text={text}/>;
    };
    return (<ul>{this.props.items.map(createItem)}</ul>);
    // var listItems = this.state.ingredients.map(function(item) {
    //   return <ListItem key={item.id} ingredient={item.text} />;
    // });
    // return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
