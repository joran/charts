/**
 * @jsx React.DOM
 */
var React = require('react');
var SelectTableColumnsInput = require('./SelectTableColumnsInput.react');
var SelectTableRowsInput = require('./SelectTableRowsInput.react');
var Table = require('./Table.react');

	  var TableApp = React.createClass({
	      getInitialState: function() {
              return {'data': this.props.data, 'columns': this.props.columns};
          },

	      render: function() {
              var isSelected = function(col, selectedColumns){
                  for(var i = 0; i < selectedColumns.length; i++){
                      if(col.prop === selectedColumns[i].prop){
                          return true;
                      }
                  }
                  return false;
			  };
              var me = this;
              var data = this.state.data;
              var columns = this.state.columns;
			  var sortBy = this.props.sortBy;
              var multipleSelect = this.props.multipleSelect||false;
              var onRowsSelect = this.props.onRowsSelect;

		      var onColumnsChange = function(selectedColumns){
				  columns.map(function(c){
                      c.visible = isSelected(c, selectedColumns);
                  });
				  me.setState({'columns':columns});
			  };

		      var onDataChange = function(selRows){
                  me.setState({'data':selRows});
			  };

              return (
	             <div>
                     <h1>{this.props.header}</h1>
	                 <SelectTableColumnsInput columns={columns} onSelect={onColumnsChange}/>
                     <SelectTableRowsInput data={data} columns={columns} onChange={onDataChange}/>
	                 <Table data={this.state.data}
                            columns={columns}
                            sortBy={sortBy}
                            onRowsSelect={onRowsSelect}
                            multipleSelect={multipleSelect} />
				 </div>
	          );
	      }
	  });


module.exports = TableApp;
