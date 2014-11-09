/**
 * @jsx React.DOM
 */
var React = require('react');
var TableStore = require('../stores/TableStore');
var TableActions = require('../actions/TableActions');
var WordsInput = require('./WordsInput.react');

var SelectTableRowsInput = React.createClass({
    getInitialState: function() {
        return {
            rows: TableStore.getAllRows(),
            columns: TableStore.getAllColumns()
        };
    },
    componentWillMount: function(){
        TableStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
		console.debug("SelectTableRowsInput.componentWillUnmount");
        TableStore.removeChangeListener(this._onChange);
    },
    _onChange : function() {
        this.setState({
            rows: TableStore.getAllRows(),
            columns: TableStore.getAllColumns()
        });
    },
    _searchTermsChange : function(searchTerms) {
        var rows = this.state.rows;
        var columns = this.state.columns;
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
        TableActions.changeVisibleRows(selectedRows);
    },
    render: function() {
        return (
                <WordsInput onChange={this._searchTermsChange}/>
        )},
});

module.exports = SelectTableRowsInput;
