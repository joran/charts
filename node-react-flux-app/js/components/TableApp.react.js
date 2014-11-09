/**
 * @jsx React.DOM
 */
var React = require('react');
var TableStore = require('../stores/TableStore');
var SelectTableColumnsInput = require('./SelectTableColumnsInput.react');
var SelectTableRowsInput = require('./SelectTableRowsInput.react');
var Table = require('./Table.react');
var Debug = require('./Debug.react');

function _getStateFromStore(){
    return {
        columns: TableStore.getAllColumns(),
		rows: TableStore.getFilteredRows(),
    };
};

var TableApp = React.createClass({
    getInitialState: function() { 
        return _getStateFromStore();
    },
    componentWillMount: function(){
        TableStore.addChangeListener(this._onChange);
    },
    _onChange : function(){
        this.setState(_getStateFromStore());
    },
    render: function() {
        var rows = this.state.rows;
        var columns = this.state.columns;
        var multipleSelect = this.props.multipleSelect||false;
        
        return (
                <div>
                    <Debug/>
                    <div>
                    <h1>{this.props.header}</h1>
                    <SelectTableColumnsInput/>
                    <SelectTableRowsInput/>
                    <Table data={rows}
                           columns={columns}
                           multipleSelect={multipleSelect} />
                    </div>
                </div>
        );
    }
});


module.exports = TableApp;
