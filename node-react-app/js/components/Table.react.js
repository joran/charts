/**
 * @jsx React.DOM
 */
var React = require('react');

	  var Table = React.createClass({
	      getInitialState: function() {
              var sortBy = this.props.sortBy || this.props.columns[0].prop;
              return {
				  sortBy: sortBy,
				  direction:'asc',
                  selectedRows: []
			 };
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

			  if (isMultipleSelect){
				  if (isAlreadySelected(row)) {
                      // unselect if already selected
			          selectedRows = selectedRows.filter(function(alreadySelectedRow){
			              return alreadySelectedRow != row;
			          });
				  } else { 
                      selectedRows.push(row);
                  }
			  } else {
                  if (isAlreadySelected(row) && selectedRows.length == 1) {
                      selectedRows=[]
                  } else {
                      selectedRows=[row];
                  }
			  }

			  this.setState({'selectedRows': selectedRows});
              if(this.props.onRowsSelect){
                  this.props.onRowsSelect(selectedRows);
              }
		  },
	      render: function() {
              var me = this;
              var columns = this.props.columns;
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

              return (
	              <table>
                      <thead>
                          <tr>
						      {columns.map(function(c, i){if(c.visible){
                                  var className = '';
                                  if(c.prop == sortBy){
                                     className = 'sort-'+direction;
                                  }

                                  return(
				                      <th className={className} key={'header-' + c.prop} data-prop={c.prop} onClick={me.handleTHClick}>{c.label}</th>
						      )}})}
						  </tr>
                      </thead>
                      <tbody>
					      {data.map(function(row, i){
                              var rowKey = 'row-' + i;
                              var className = row.isSelected ? 'selected' : '';
                              return (
	                          <tr className={className} key={rowKey} onClick={me.handleTRClick}>
							      {columns.map(function(c, j){if(c.visible){return(
					                  <td key={'cell-'+row.uid+'-'+c.prop}>{row[c.prop]}</td>
							      )}})}
                              </tr>
                           );})}
                      </tbody>
                  </table>
	         );
	      },
	  });

module.exports = Table;
