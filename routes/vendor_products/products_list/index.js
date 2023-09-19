import express from 'express'
import { myAxios } from "../utils.js"


const router = express.Router() 

/**
     * @openapi
     * '/api/vendor_products/get_products_list':
     *  post:
     *     tags:
     *     - Get product list by vendor
     *     summary: get product list by vendor
     *     requestBody:
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - userId
     *            properties:
     *              vendor:
     *                type: number
     *                default: 12
     *              product_list:
     *                type: Array
     *                default: [13645]
     *     responses:
     *      200:
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                KTP: 
     *                  type: number
     *                  default: 13645
     *                VENDOR: 
     *                  type: string
     *                  default: 12
     *                NAME:
     *                  type: string
     *                  default: Панель (250*2700) SR 2030 весна
     *                UNIT_OF_MEASURE:
     *                  type: string
     *                  default: ШТ
     *        description: Success
     *      401:
     *        description: Unauth
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     *      
     */

router.post('/get_products_list', async (req,res) => {
    let body = req.body
    console.log(body)
    let response = await myAxios.post('https://dev.pas.sdvor.com/api/vendor_products/get_product_list', body)
    res.send(response.data)
})

export default router