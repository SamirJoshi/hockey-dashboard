import * as createError from "http-errors"
import * as express from "express"
import * as cors from "cors"
import * as path from "path"

import rankingRouter from "./routes/rankingRouter"
import comparisonRouter from "./routes/comparisonRouter"

const app = express()

app.use(cors())

// Serve the static files from the React app
app.use(express.static('../client/build'))

app.use('/comparison', comparisonRouter)
app.use('/team', rankingRouter)
app.use('/rankings', rankingRouter)

// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
  res.sendFile('../client/build/index.html')
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err: createError.HttpError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).send()
})

const port = 3001
app.listen(port, () => console.log(`Started listening on port ${port}`))