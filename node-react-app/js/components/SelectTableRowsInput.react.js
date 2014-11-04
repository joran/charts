/**
 * @jsx React.DOM
 */
var React = require('react');
var WordsInput = require('./WordsInput.react');

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

module.exports = SelectTableRowsInput;
