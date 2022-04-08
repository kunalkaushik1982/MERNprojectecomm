const express = require("express")
const { getProductDetails,getAllProducts,createProduct,updateProduct,deleteProduct } = require("../controllers/productController")

const router=express.Router()

router.route('/getallproducts').get(getAllProducts)
router.route('/createproduct/new').post(createProduct)
router.route('/updateproduct/:id').put(updateProduct)
router.route('/deleteproduct/:id').delete(deleteProduct)
router.route('/getproduct/:id').get(getProductDetails)

module.exports = router