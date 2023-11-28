const { User } = require("../models");
class UserController {
  static async Register(req, res, next) {
    try {
      const { nama, alamat, nomor_telepon, jenis_kelamin } = req.body;

      let user = await User.findOne({
        where: { nama: nama },
      });
      if (user) {
        throw { name: "Bad Request" };
      }
      await User.create({ nama, alamat, nomor_telepon, jenis_kelamin });
      res.status(201).json({ nama, alamat, nomor_telepon, jenis_kelamin });
    } catch (error) {
      next(error);
    }
  }

  static async GetListUser(req, res, next) {
    try {
      let users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  static async DeletUser(req, res, next) {
    try {
      const { id } = req.params;
      let user = await User.findOne({
        where: { id: id },
      });

      if (!user) {
        throw { name: "Not Found" };
      }

      await User.destroy({
        where: {
          id: id,
        },
      });

      res.status(200).json({ message: "Successfuly delete" });
    } catch (error) {}
  }

  static async GetOneUser(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findOne({
        id,
      });
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async EditUser(req, res, next) {
    const { id } = req.params;
    const { nama, alamat, nomor_telepon, jenis_kelamin } = req.body;

    let editUser = await User.update(
      { nama, alamat, nomor_telepon, jenis_kelamin },
      {
        where: { id: id },
      }
    );

    res.status(200).json({ message: "Successfully edit data" });
  }
}

module.exports = UserController;
