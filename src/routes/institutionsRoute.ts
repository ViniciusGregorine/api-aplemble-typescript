import { adaptRoute } from "@/routes/routeAdapter/adapterRoute";
import { loginController } from "@/useCases/institutionUseCase/institutionLogin";
import { Router } from "express";

const instituionsRouter = Router()


instituionsRouter.get('/login', adaptRoute(loginController))

export default instituionsRouter
