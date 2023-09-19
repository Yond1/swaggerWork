import express from 'express'
import { myAxios } from '../utils.js'


const router = express.Router() 
/**
     * @openapi
     * '/api/vendor_products/get_vendors':
     *  post:
     *     tags:
     *     - Get vendors
     *     summary: get vendor by sap_code
     *     requestBody:
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            properties:
     *              vendor:
     *                type: number
     *                default: 18
     *     responses:
     *      200:
     *        content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                VENDOR: 
     *                  type: string
     *                  default: 0000000018
     *                NAME: 
     *                  type: string
     *                  default: ОАО "Омскнефтепроводстрой"
     *                INN:
     *                  type: string
     *                  default: 5501023640
     *                KPP:
     *                  type: string
     *                  default: 550101001
     *        description: Success
     *      401:
     *        description: Unauth
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     *      
     */
    
router.post('/get_vendors', async (req,res) => {
    let body = await req.body
    console.log(body)
    let response = await myAxios.post('https://dev.pas.sdvor.com/api/vendor_products/get_vendors', body)
    res.send(response.data)
})

export default router 