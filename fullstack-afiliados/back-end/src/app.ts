import { TransactionsRouter } from "./routes/transactionsRoute"
import { UploadRoutes } from "./routes/uploadRoute"
import { app } from "./server"

app.use('/uploadFile', UploadRoutes)
app.use('/transaction', TransactionsRouter)

