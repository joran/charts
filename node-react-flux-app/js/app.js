/**
 * @jsx React.DOM
 */

var React = require('react');

var TableApp = require('./components/TableApp.react');


	  var tableConfig = {
          'header': 'My Table...',
          'sortBy': 'name',
          'multipleSelect': true
	  };


React.renderComponent(
   TableApp(tableConfig),
    document.getElementById('content')
);

