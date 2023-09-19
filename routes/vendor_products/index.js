import express from 'express'
import get_vendors from './vendors/index.js'
import get_product_list from './products_list/index.js'

const router = express.Router() 

router.use('/vendor_products', get_vendors)
router.use('/vendor_products', get_product_list)

export default router


