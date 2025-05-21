const User = require('../Model/userModel');

// @desc    Get all users
// @route   GET /api/users/get-users
const getAllUsers = (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => {
            console.error("Error fetching users:", err);
            res.status(500).json({ message: "Internal Server Error" });
        });
};

// @desc    Add a new user
// @route   POST /api/users/add-user
const addUser = (req, res) => {
    const { name, age, email } = req.body;

    const newUser = new User({ name, age, email });

    newUser.save()
        .then(user => res.status(201).json(user))
        .catch(err => {
            console.error("Error adding user:", err);
            res.status(400).json({ message: "Error adding user", error: err.message });
        });
};

// @desc    Update a user
// @route   PUT /api/users/update-user/:id
const updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(user => {
            if (!user) return res.status(404).json({ message: "User not found" });
            res.json(user);
        })
        .catch(err => {
            console.error("Error updating user:", err);
            res.status(500).json({ message: "Error updating user" });
        });
};

// @desc    Delete a user
// @route   DELETE /api/users/delete-user/:id
const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => {
            if (!user) return res.status(404).json({ message: "User not found" });
            res.json({ message: "User deleted successfully" });
        })
        .catch(err => {
            console.error("Error deleting user:", err);
            res.status(500).json({ message: "Error deleting user" });
        });
};

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
};
