var TableDispatcher = require('../dispatcher/TableDispatcher');
var TableConstants = require('../constants/TableConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _columns = [
    {'key':'prop1', 'prop': 'name',  'label': 'Name',  'sortable': 'true', 'visible':true, 'searchable': true},
	{'key':'prop2', 'prop': 'uid',   'label': 'Konto', 'sortable': 'true', 'visible':true, 'searchable': true},
	{'key':'prop3', 'prop': 'pnr',   'label': 'Pnr',   'sortable': 'true', 'visible':false, 'searchable': true},
	{'key':'prop4', 'prop': 'email', 'label': 'Email', 'sortable': 'true', 'visible':true, 'searchable': true}
];

var _rows = UsersGenerator.get(150).map(function(user){
    return {
        name: user.surname + ", " + user.givenname,
        uid: user.uid,
        pnr: user.pnr,
        email: user.email
    };
});

var _selectedRows = [];
var _filteredRows = _rows;

var CHANGE_EVENT = 'change';
function _columnExists(c,cs){
	return cs.find(function(e,i,a){ return e.prop === c.prop;}) != undefined;
}

function _addColumn(c){
    _colums.forEach(function(_c){if (_c.key === c.key) _c.visible=true;});
};

function _removeColumn(c){
    _colums.forEach(function(_c){if (_c.key === c.key) _c.visible=false;});
};

function _selectColumns(cs){
    _columns.forEach(function(_c){_c.visible = _columnExists(_c, cs)});
};

function _getVisibleColumns() {
    return _columns.filter(function(c){return c.visible});
}

function _selectRow(r){
    _selectedRows.push(r);
};

function _unselectRow(r){
    console.debug("TableStore._unselectRow", r);
    _selectedRows = _selectedRows.filter(function(_r){ return _r.uid === r.uid;});
};

function _unselectAllRows(){
    _selectedRows = [];
};

function _getSelectedRows(){
    return _selectedRows;
};

function _setSelectedRows(selectedRows){
    _selectedRows = selectedRows;
};

function _getFilteredRows(){
    return _filteredRows;
};

function _setFilteredRows(rows){
    _filteredRows = rows;
};

var TableStore = assign({}, EventEmitter.prototype, {
    getAllColumns: function(){
        return _columns;
    },

    getSelectedColumns: function(){
        return _getVisibleColumns();
    },

    getAllRows: function(){
        return _rows;
    },

    getSelectedRows: function(){
        return _getSelectedRows();
    },

    getFilteredRows: function(){
        return _getFilteredRows();
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    // Register to handle all updates
    dispatcherIndex: TableDispatcher.register(function(payload) {
        var action = payload.action;
        switch(action.actionType){
            case TableConstants.CHANGE_SELECTED_COLUMNS:
                _selectColumns(action.columns);
                break;
		    case TableConstants.CHANGE_VISIBILE_ROWS:
			    _setFilteredRows(action.rows)
                break;
            case TableConstants.SELECT_ROW:
                _selectRow(action.row);
                break;
            case TableConstants.UNSELECT_ALL_ROWS:
                _unselectAllRows();
                break;
            case TableConstants.UNSELECT_ROW:
                _unselectRow(action.row);
                break;
            default:
                return true;
        }
        TableStore.emitChange();
        return true;
    })

});

module.exports = TableStore;
