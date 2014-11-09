/**
 * @jsx React.DOM
 */
var React = require('react');
var TableStore = require('../stores/TableStore');
var TableActions = require('../actions/TableActions');

	  var Table = React.createClass({
	      getInitialState: function() {
              var columns = TableStore.getSelectedColumns();//TableStore.getAllColumns();
              var sortBy = columns[0].prop;
              return {
                  columns: columns,
				  sortBy: sortBy,
				  direction:'asc',
                  selectedRows: []
			 };
          },
          componentWillMount: function(){
              TableStore.addChangeListener(this._onChange);
          },
          _onChange : function(){
              this.setState({
                  selectedRows: TableStore.getSelectedRows(),
                  columns: TableStore.getSelectedColumns()                  
              });
          },
	      handleTHClick : function(event){
              var selectedProp = event.target.dataset.prop;
			  var direction = this.state.direction
              if(selectedProp == this.state.sortBy){
                 direction = (direction == 'asc') ? 'desc':'asc';
              } else {
                 direction = 'asc';
              }
              this.setState({sortBy: selectedProp, direction:direction});
		  },
	      handleTRClick : function(event){
              var rows = this.props.data;
              var selectedRows = this.state.selectedRows;

              var isAlreadySelected = function(row){
                  return selectedRows.filter(function(alreadySelectedRow){
			          return alreadySelectedRow == row;
			      }).length > 0;
              };
              
              var node = event.target;
              while(node.tagName != "TR"){
                  node = node.parentNode;
              }
			  var selectedIdx = node.sectionRowIndex;
              var row = rows[selectedIdx];
			  
              var isMultipleSelect = this.props.multipleSelect && event.ctrlKey;

			  if (isAlreadySelected(row)) {
                  TableActions.unselectRow(row);
              } else {
                  if (!isMultipleSelect) {
                      TableActions.unselectAllRows()
                  }
                  TableActions.selectRow(row);
              }

		  },
	      render: function() {
              var me = this;
              var columns = this.state.columns;
              var sortBy = this.state.sortBy;
              var direction = this.state.direction;
              var selectedRows = this.state.selectedRows;

              var data = this.props.data.sort(function(a,b){
                  var aValue = a[sortBy] || "";
                  var bValue = b[sortBy] || "";
                  if(direction == 'asc'){
                      return aValue.localeCompare(bValue, "sv");
                  } else {
                      return bValue.localeCompare(aValue, "sv");
                  }
              }).map(function(row){
                  row.isSelected = false;
                  for(var i = 0; i < selectedRows.length; i++){
                      if(row == selectedRows[i]){
                          row.isSelected = true;
                          break;
                      }
                  }
                  return row;
              });

              var tableHeaders = columns.map(function(c, i){
                  var className = '';
                  if(c.prop == sortBy){
                      className = 'sort-'+direction;
                  }
                  return(
                          <th className={className} 
                             key={'header-' + c.prop} 
                             onClick={me.handleTHClick}>
                             {c.label}
                         </th>
                  );
              });

			  var tableDataRows = data.map(function(row, i){
				  var renderDataColumn = function(c){
					  return(<td key={'cell-'+row.uid+'-'+c.prop}>{row[c.prop]}</td>);
				  }
                  var dataColumns = columns.map(renderDataColumn);
                  var rowKey = 'row-' + i;
                  var className = row.isSelected ? 'selected' : '';
                  return (
	                      <tr className={className}
                              key={rowKey}
                              onClick={me.handleTRClick}>
						      {dataColumns}
						  </tr>
                  );
			  });

              return (
	              <table>
                      <thead>
                          <tr>
					          {tableHeaders}
						  </tr>
                      </thead>
                      <tbody>
                          {tableDataRows}
                      </tbody>
                  </table>
	         );
	      },
	  });

module.exports = Table;
