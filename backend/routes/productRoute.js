const express = require("express")
const { getProductDetails,getAllProducts,createProduct,updateProduct,deleteProduct } = require("../controllers/productController")
const {isAuthenticatedUser,authorizeRoles} = require("../middleware/auth")

const router=express.Router()

// router.route('/getallproducts').get(isAuthenticatedUser,authorizeRoles("admin"),getAllProducts)
router.route('/products').get(getAllProducts)
router.route('/admin/createproduct/new').post(isAuthenticatedUser,authorizeRoles("admin"),createProduct)
router.route('/admin/updateproduct/:id').put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct)
router.route('/admin/deleteproduct/:id').delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)
router.route('/getproduct/:id').get(getProductDetails)

module.exports = router