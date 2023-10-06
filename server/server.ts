import express from 'express'
import path from 'path'
import shopListsRoutes from './routes/shoplists'
import jobListsRoutes from './routes/joblists'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/shoplists', shopListsRoutes)
server.use('/api/v1/jobLists', jobListsRoutes)


export default server