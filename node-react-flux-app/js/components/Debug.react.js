/**
 * @jsx React.DOM
 */
var React = require('react');
var TableStore = require('../stores/TableStore');

function _getStateFromStore(){
    return {
        columns: TableStore.getAllColumns(),
        selectedColumns: TableStore.getSelectedColumns(),
        rows: TableStore.getAllRows(),
        selectedRows: TableStore.getSelectedRows(),
        filteredRows: TableStore.getFilteredRows()
    };
}

var Debug = React.createClass({
    getInitialState: function() {
        return _getStateFromStore();
    },
    componentWillMount: function(){
        TableStore.addChangeListener(this._onChange);
    },
	componentWillUnmount: function() {
        TableStore.removeChangeListener(this._onChange);
	},
    _onChange : function() {
        this.setState(_getStateFromStore());
    },
    render: function() {
        return (
            <div className={"debug"}>
                <section>
                    columns: {this.state.selectedColumns.length}({this.state.columns.length})
                </section>
                <section>
                    rows: {this.state.selectedRows.length}({this.state.filteredRows.length}/{this.state.rows.length})
                </section>
            </div>
        );
    },
});

module.exports = Debug;
