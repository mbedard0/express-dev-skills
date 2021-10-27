// import modules

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import * as skillsDB from './data/skills-db.js'
import methodOverride from 'method-override'

// import routes
import { router as indexRouter } from './routes/index.js'
import { router as skillsRouter} from './routes/skills.js'


// Create Express app

const app = express()

// view engine setup
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')

// Mount Middleware (app.use)
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)

// mounted routers
app.use('/', indexRouter)
app.use('/skills', skillsRouter)


// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})