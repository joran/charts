/**
 * @jsx React.DOM
 */
var React = require('react');

      /**
       * Generic high level select component
       * Properties:
       *  - options, an array of objects {prop, label, visible}.
       *  - onSelect, a callback that takes an array of selected objects.  
       */
	  var Select = React.createClass({
          onSelect : function(event) {
	          var options = this.props.options;
              var selOpts = event.target.selectedOptions;
	          var selectedValues = [];

	          for(var i = 0; i < selOpts.length; i++){
		          selectedValues.push(selOpts[i].value);
              }

              var selectedOptions = options.filter(function(o){return selectedValues.indexOf(o.value) >= 0});

              this.props.onSelect(selectedOptions);
	      },
	      render: function() {
              var options = this.props.options;
			  var selectedValues = options.filter(function(o){return o.selected}).map(function(o){return o.value});
			  
              return (
                  <select value={selectedValues} multiple={true} onChange={this.onSelect}>
					{options.map(function(o){ return(
					    <option value={o.value} key={o.value}>{o.label}</option>
                    )})}
                  </select>
	      )},
	  });

module.exports = Select;