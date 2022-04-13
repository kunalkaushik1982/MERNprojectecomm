const express = require("express")
const { getProductDetails,getAllProducts,createProduct,updateProduct,deleteProduct } = require("../controllers/productController")
const {isAuthenticatedUser,authorizeRoles} = require("../middleware/auth")

const router=express.Router()

// router.route('/getallproducts').get(isAuthenticatedUser,authorizeRoles("admin"),getAllProducts)
router.route('/getallproducts').get(getAllProducts)
router.route('/createproduct/new').post(isAuthenticatedUser,authorizeRoles("admin"),createProduct)
router.route('/updateproduct/:id').put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct)
router.route('/deleteproduct/:id').delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)
router.route('/getproduct/:id').get(getProductDetails)

module.exports = router