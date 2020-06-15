"use strict";

const User = use("App/Models/User"); //importando esse model
const Database = use("Database");
const Drive = use("Drive");

class UserController {
  async new({ request, response }) {
    let data = request.only(["name", "cpf", "email", "password"]);
    data["access"] = 1;
    const image = request.file("fileImage", {
      types: ["image"],
      size: "2mb",
    });
    if (image) {
      await image.move("../public/uploads/profile-image");
      if (!image.moved()) {
        return image.error();
      }
      data["img_path"] = "/uploads/profile-image/" + image.fileName;
    }
    const user = await User.create(data);
    return response.status(201).json(user);
  }

  async login({ request, response, auth }) {
    const data = request.only(["email", "password"]); // let the user choose between email and cpf to use as login
    const token = await auth.attempt(data.email, data.password);
    return response.json(token);
  }

  async getAll({ response }) {
    const resp = await User.all();
    return response.json(resp);
  }

  async get({ response, params }) {
    const resp = await User.find(params.id);
    return response.json(resp);
  }
  async getByEmail({ response, params }) {
    const resp = await User.findBy("email", params.email);
    return response.json(resp);
  }

  async deleteUser({ params }) {
    User.delete(params.id);
  }

  async changeAccesses({ request, response, params }) {
    const data = request.only(["access"]);
    const resp = Database.table("users").where("id", params.id).update(data);
    return resp;
  }

  async edit({ request, response, params }) {
    let data = request.all();
    const image = request.file("fileImage", {
      types: ["image"],
      size: "2mb",
    });
    const oldFile = await User.find(params.id);
    const exists = await Drive.exists("../../public" + oldFile.img_path);
    if (image) {
      if (exists) {
        await Drive.delete("../../public" + oldFile.img_path);
      }
      await image.move("../public/uploads/profile-image/");
      if (!image.moved()) {
        return image.error();
      }
      data["img_path"] = "/uploads/profile-image/" + image.fileName;
    }
    const resp = await Database.table("users")
      .where("id", params.id)
      .update(data);
    return response.json(resp);
  }
}

module.exports = UserController;
