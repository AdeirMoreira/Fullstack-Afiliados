import authenticationController from "./controllers/authentication.controller";
import { AuthRouter } from "./routes/authentication.route";
import { SellersRouter } from "./routes/sellers.route";
import { UploadRoutes } from "./routes/upload.route";
import { UsersRouter } from "./routes/users.route";
import { app } from "./server";
const ValidateToken = authenticationController.ValidateToken 

app.use('/auth', AuthRouter)
app.use("/users", UsersRouter)
app.use("/uploadFile", ValidateToken, UploadRoutes);
app.use("/sellers", ValidateToken, SellersRouter);
