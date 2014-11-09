var TableDispatcher = require('../dispatcher/TableDispatcher');
var TableConstants = require('../constants/TableConstants');

var TableActions = {
    changeSelectedColumns: function(columns){
        TableDispatcher.handleViewAction({
            actionType: TableConstants.CHANGE_SELECTED_COLUMNS,
            columns: columns

        });
    },
    selectRow: function(row){
        TableDispatcher.handleViewAction({
            actionType: TableConstants.SELECT_ROW,
            row: row

        });
    },
    unselectRow: function(row){
        TableDispatcher.handleViewAction({
            actionType: TableConstants.UNSELECT_ROW,
            row: row

        });
    },
    selectAllRows: function(){
        TableDispatcher.handleViewAction({
            actionType: TableConstants.SELECT_ALL_ROWS,
        });
    },
    unselectAllRows: function(){
        TableDispatcher.handleViewAction({
            actionType: TableConstants.UNSELECT_ALL_ROWS,
        });
    },
    changeRowFilter: function(filter){
        TableDispatcher.handleViewAction({
            actionType: TableConstants.CHANGE_ROWS_FILTER,
            filter: filter

        });
    },
    changeVisibleRows: function(rows){
        TableDispatcher.handleViewAction({
            actionType: TableConstants.CHANGE_VISIBILE_ROWS,
            rows: rows

        });
    },
};

module.exports = TableActions;