const UsersModel = require('../models/usersModel');

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.json({
      message: 'GET all users success',
      data: data
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error,
    });
  }
}

const createNewUser = async (req, res) => {
  const { body } = req;
  if(!body.email || !body.name || !body.address) {
    return res.status(400).json({
      data: null,
      message: 'Anda mengirimkan data yang salah'
    })
  }
  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      data: body,
      message: 'POST new user created'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error,
    });
  }
}

const updateUser = async(req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUser(body, id);
    res.json({
      data: {
        id: id,
        ...body
      },
      message: "Update user success"
    })
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error,
    });
  }
}

const deleteUser = async(req, res) => {
  const { id } = req.params;
  try {
    await UsersModel.deleteUser(id);
    res.json({
      data: null,
      message: "Delete User Success"
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      serverMessage: error,
    });
  }
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
}