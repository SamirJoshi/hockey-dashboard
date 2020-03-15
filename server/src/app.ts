import * as express from "express"
import * as cors from "cors"

import rankingRouter from "./routes/rankingRouter"
import comparisonRouter from "./routes/comparisonRouter"

const app = express()

app.use(cors())

app.use('/comparison', comparisonRouter)
app.use('/team', rankingRouter)
app.use('/rankings', rankingRouter)

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

const port = 3001
app.listen(port, () => console.log(`Started listening on port ${port}`))