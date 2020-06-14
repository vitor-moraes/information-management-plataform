'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() =>{
  Route.post('new', 'UserController.new');
  Route.post('login', 'UserController.login');
  Route.get('getAll', 'UserController.getAll');
  Route.get('get/:id', 'UserController.get');
  Route.post('edit/:id', 'UserController.edit');
}).prefix("users");
