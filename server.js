// import modules

import express from 'express'
import * as skillsDB from './data/skills-db.js'
import indexRouter from './routes/index.js'

// Create Express app

const app = express()

// Configure the app (app.set)



// Mount Middleware (app.use)

app.use('/', indexRouter)


// Mount routes



// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})