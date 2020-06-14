'use strict'

const User = use('App/Models/User') //importando esse model
const Database = use('Database');

class UserController {

  async new({request, response}){
    let data = request.only(['name','cpf','email','password'])
    data['access'] = 1;
    const user = await User.create(data);
    return response.status(201).json(user);
  }

  async login({request, response, auth}){
    const data = request.only([/*'cpf'*/'email','password']) // let the user choose between email and cpf to use as login
    const token = await auth.attempt(/*data.cpf*/ data.email, data.password);
    return response.json(token);
  }

  async getAll({response}){
    const resp = await User.all();
    return response.json(resp);
  }

  async get({response, params}){
    const resp = await User.find(params.id);
    return response.json(resp);
  }

  async edit({request, response, params}){
    let data = request.all();
    const resp = await Database.table('users').where('id', params.id).update(data);
    return response.json(resp);
  }

}

module.exports = UserController
