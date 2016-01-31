import * as path from 'path'
import * as express from 'express'

import { ng2engine, REQUEST_URL, SERVER_LOCATION_PROVIDERS } from 'angular2-universal-preview'
import { provide } from 'angular2/core'
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router'
import { App } from './components/app'

const PORT = process.env.PORT || 3100
let app = express()
let root = path.join(path.resolve(__dirname, '..'))

app.engine('.html', ng2engine)
app.set('views', __dirname)
app.set('view engine', 'html')

function ngApp(req, res) {
  let baseUrl = '/'
  let url = req.originalUrl || '/'
  res.render('index', {
    App,
    providers: [
      provide(APP_BASE_HREF, { useValue: baseUrl }),
      provide(REQUEST_URL, { useValue: req.originalUrl }),
      ROUTER_PROVIDERS,
      SERVER_LOCATION_PROVIDERS
    ],
    preboot: true
  })
}

app.use(express.static(root))

// Routes
app.use('/', ngApp)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
