import { TransactionsRouter } from "./routes/transactions.route"
import { UploadRoutes } from "./routes/upload.route"
import { app } from "./server"

app.use('/uploadFile', UploadRoutes)
app.use('/transaction', TransactionsRouter)

