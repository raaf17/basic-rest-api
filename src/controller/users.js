const getAllUsers = (req, res) => {
  const data = {
    id: "1",
    name: "Muhammad Rafi",
    email: "rafi@gmail.com",
    address: "Tulungagung"
  }
  res.json({
    data: data,
    message: 'GET all users success',
  });
}

const createNewUser = (req, res) => {
  const { id } = req.params;
  console.log('idUser: ', id);
  res.json({
    data: req.body,
    message:'POST new user created'
  });
}

const updateUser = (req, res) => {
  const { id } = req.params;
  console.log('idUser: ', id);
  res.json({
    data: req.body,
    message: "Update user success"
  })
}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser
}