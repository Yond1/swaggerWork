import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import router from './routes/vendor_products/index.js'
import dotenv from 'dotenv'
dotenv.config()

const options = {
    definition: {
    openapi: '3.0.0',
      info: {
        title: 'API vendors',
        version: '1.0.0',
      },
    },
    apis: ['./routes/**/*.js'],
  };
  
const app = express()


const swaggerSpec =  swaggerJsdoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
})
  
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors())
app.use('/api', router)

app.listen(PORT, () => console.log('listen port:'+PORT))