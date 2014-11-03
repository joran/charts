/** @jsx React.DOM */

      //------------------------------------------------------------------------
      // "Generic" components
      //------------------------------------------------------------------------

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

      //------------------------------------------------------------------------
      // Application components
      //------------------------------------------------------------------------

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

	  var SelectTableRowsInput = React.createClass({
	      getInitialState: function() {
              return {orgData: this.props.data};
          },
          onChange : function(searchTerms) {
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
                  <WordsInput onChange={this.onChange}/>
	      )},
	  });

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


