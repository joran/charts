/** @jsx React.DOM */
	  var ColumnFilter = React.createClass({
	      getInitialState: function() {
              return {columns: this.props.columns};
          },
          onSelect : function(event) {
	          var columns = this.state.columns;
	          var options = event.target.options;
              var selOpts = event.target.selectedOptions;
	          var selectedValues = [];

	          for(var i = 0; i < selOpts.length; i++){
			      selectedValues.push(selOpts[i].value);
              }

              this.props.onSelect(selectedValues);
	      },
	      render: function() {
              var columns = this.state.columns;
			  var selectedValues = columns.filter(function(c){return c.visible}).map(function(c){return c.prop});

              return (
                  <select value={selectedValues} multiple={true} onChange={this.onSelect}>
					{columns.map(function(c, i){ return(
					    <option value={c.prop} key={c.prop}>{c.label}</option>
                    )})}
                  </select>
	      )},
	  });

	  var DataFilter = React.createClass({
	      getInitialState: function() {
              return {data:this.props.data, orgData: this.props.data};
          },
          onChange : function(event) {
              var searchTerms = event.target.value.split(' ').filter(function(v){ return v.length > 0;});
              var rows = this.state.orgData;
			  var columns = this.props.columns;
              var isSearchable = function(c){return c.searchable};
              var getPropName = function(c){ return c.prop};

              var selectedRows = rows.filter(function(row){
                  var foundPropForAllSearchTerms = true;
                  for(var i = 0 ; i < searchTerms.length; i++){
                      var searchTerm = searchTerms[i];
                      var foundPropContainingSearchTerm = false;
                      var propNames = columns.filter(isSearchable).map(getPropName);

                      for(var j = 0; j < propNames.length; j++){
                          var propName = propNames[j];
                          var propValue = row[propName].toString();
                          if(propValue.containsIgnoreCap(searchTerm)){
                               foundPropContainingSearchTerm = true;
                          }
                      }

                      // Accumulate if a property is found that contains current serch term
                      // All search terms must be found in any property
                      foundPropForAllSearchTerms = foundPropForAllSearchTerms && foundPropContainingSearchTerm;
                  }
                  return foundPropForAllSearchTerms;
              });
              this.props.onChange(selectedRows);
	      },
	      render: function() {
              return (
                  <input type={'text'} onChange={this.onChange}/>
	      )},
	  });

	  var Table = React.createClass({
          componentWillReceiveProps: function(nextProps){
              this.setState({data: nextProps.data});
          },
	      getInitialState: function() {
              var sortBy = this.props.sortBy || this.props.columns[0].prop;
              return {
				  data: this.props.data,
				  columns: this.props.columns,
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
              var rows = this.state.data;
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
              var columns = this.state.columns;
              var sortBy = this.state.sortBy;
              var direction = this.state.direction;
              var selectedRows = this.state.selectedRows;

              var data = this.state.data.sort(function(a,b){
                  var aValue = a[sortBy] || "";
                  var bValue = b[sortBy] || "";
                  if(direction == 'asc'){
                      return aValue.localeCompare(bValue);
                  } else {
                      return bValue.localeCompare(aValue);
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


