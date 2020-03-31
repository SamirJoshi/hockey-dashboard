"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const rankingRouter_1 = require("./routes/rankingRouter");
const comparisonRouter_1 = require("./routes/comparisonRouter");
const app = express();
app.use(cors());
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../../client/build')));
app.use('/comparison', comparisonRouter_1.default);
app.use('/team', rankingRouter_1.default);
app.use('/rankings', rankingRouter_1.default);
// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});
// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});
// error handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).send();
});
const port = 3001;
app.listen(port, () => console.log(`Started listening on port ${port}`));
//# sourceMappingURL=app.js.map