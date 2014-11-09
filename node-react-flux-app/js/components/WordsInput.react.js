/**
 * @jsx React.DOM
 */
var React = require('react');

      /**
       * Generic high level component for words input 
       * Properties:
       *  - onChange, a callback that takes an array of words.  
       */
	  var WordsInput = React.createClass({
          onChange : function(event) {
              var searchTerms = event.target.value.split(' ').filter(function(v){ return v.length > 0;});
              this.props.onChange(searchTerms);
	      },
	      render: function() {
              return (
                  <input type={'text'} onChange={this.onChange}/>
	      )},
	  });


module.exports = WordsInput;