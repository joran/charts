/**
 * @jsx React.DOM
 */
var React = require('react');
var Select = require('./Select.react');

      /**
       * An extension of the Select component that handles the selection of
       * objects representing a Table column
       * Properties:
       *  - columns, an array of table column configuration objects.
       *  - onSelect, a callback that takes an array of selected columns.
       */
	  var SelectTableColumnsInput = React.createClass({
          onSelect : function(selectedObjects) {
              var columns = this.props.columns;
		      var selectedValues = selectedObjects.map(function(obj){return obj.value});
              var selectedColumns = columns.filter(function(c){return selectedValues.indexOf(c.prop) >= 0});
              this.props.onSelect(selectedColumns);
	      },
	      render: function() {
              var columns = this.props.columns;
			  var options = columns.map(function(c){return {value:c.prop, label:c.label, selected:c.visible}});
              return (
                  <Select options={options} onSelect={this.onSelect}/>
	      )},
	  });


module.exports = SelectTableColumnsInput;