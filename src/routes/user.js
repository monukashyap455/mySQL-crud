const express = require("express")
const router = (express).Router();
const userController = require("../controller/user")

router.get('/table', userController.userGet)
router.post('/create', userController.createtable)
router.post('/insert', userController.insertData)
router.delete('/delete/:id', userController.deleteData)
router.patch('/update/:id', userController.updateData)


module.exports = router