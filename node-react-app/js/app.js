/**
 * @jsx React.DOM
 */

var React = require('react');

var TableApp = require('./components/TableApp.react');


	  var tableConfig = {
      'header': 'My Table...',
	  'data': [],
      'sortBy': 'name',
      'multipleSelect': true,
      'onRowsSelect': function(rs){console.info("onRowsSelect callback", rs)},
      'columns': [
          {'key':'prop1', 'prop': 'name',  'label': 'Name',  'sortable': 'true', 'visible':true, 'searchable': true},
	      {'key':'prop2', 'prop': 'uid',   'label': 'Konto', 'sortable': 'true', 'visible':true, 'searchable': true},
	      {'key':'prop3', 'prop': 'pnr',   'label': 'Pnr',   'sortable': 'true', 'visible':false, 'searchable': true},
	      {'key':'prop4', 'prop': 'email', 'label': 'Email', 'sortable': 'true', 'visible':true, 'searchable': true}
	  ]};

      var users = UsersGenerator.get(150);
      for(var i = 0; i < users.length; i++){
          var user = users[i];
          var name = user.surname + ", " + user.givenname;
          var pnr = user.pnr;
          var email = user.email;
	      tableConfig.data.push({
		      name: name,
              uid: user.uid,
              pnr:pnr,
              email:email
          });
	  }


React.renderComponent(
   TableApp(tableConfig),
    document.getElementById('content')
);

