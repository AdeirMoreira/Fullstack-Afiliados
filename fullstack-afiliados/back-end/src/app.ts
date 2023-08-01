import { SellersRouter } from "./routes/sellers.route"
import { UploadRoutes } from "./routes/upload.route"
import { app } from "./server"

app.use('/uploadFile', UploadRoutes)
app.use('/sellers', SellersRouter)

