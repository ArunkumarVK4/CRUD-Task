const express = require("express")
const { getUser, addUser, updateUser, deleteUser } = require("../controller/userController")

const router = express.Router()

router.get("/", getUser)
router.post("/add", addUser)
router.put("/update", updateUser)
router.delete("/delete", deleteUser)



module.exports = router