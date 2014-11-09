/**
 * @jsx React.DOM
 */
var React = require('react');
var Select = require('./Select.react');
var TableStore = require('../stores/TableStore');
var TableActions = require('../actions/TableActions');

function _columnExists(c,columns){
    return columns.find(function(e,i,a){ return e.prop === c.prop;}) != undefined;
}

/**
 * An extension of the Select component that handles the selection of
 * objects representing a Table column
 * Properties:
 *  - columns, an array of table column configuration objects.
 *  - onSelect, a callback that takes an array of selected columns.
 */
var SelectTableColumnsInput = React.createClass({
    getInitialState: function() {
        return {
            columns: TableStore.getAllColumns(),
            selectedColumns: TableStore.getSelectedColumns()
        };
    },
    componentWillMount: function(){
        TableStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        TableStore.removeChangeListener(this._onChange);
    },
    _onChange : function(){
        this.setState({
            selectedColumns: TableStore.getSelectedColumns()
        });
    },
    _onSelect : function(selectedObjects) {
        var columns = this.state.columns;
        var selectedValues = selectedObjects.map(function(obj){return obj.value});
        var selectedColumns = columns.filter(function(c){return selectedValues.indexOf(c.prop) >= 0});
        TableActions.changeSelectedColumns(selectedColumns);
    },
    render: function() {
        var columns = this.state.columns;
        var selectedColumns = this.state.selectedColumns;
        var options = columns.map(function(c){return {value:c.prop, label:c.label, selected:_columnExists(c, selectedColumns)}});
        return (
            <Select options={options} onSelect={this._onSelect}/>
        )},
});


module.exports = SelectTableColumnsInput;
