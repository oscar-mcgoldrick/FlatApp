import express from 'express'
import path from 'path'
import shoplistRoutes from './routes/shoplists'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/shoplists', shoplistRoutes)


export default server