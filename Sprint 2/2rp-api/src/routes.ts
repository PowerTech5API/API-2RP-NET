import { Router } from "express";

import { CreateSobreavisoController } from "./controllers/SobreavisoController/CreateSobreavisoController";
import { DeleteSobreavisoController } from "./controllers/SobreavisoController/DeleteSobreavisoController";
import { GetAllSobreavisosController } from "./controllers/SobreavisoController/GetAllSobreavisosController";
import { UpdateSobreavisoController } from "./controllers/SobreavisoController/UpdateSobreavisoController";

import { CreateHorasextrasController } from "./controllers/HorasextrasController/CreateHorasextrasController";
import { DeleteHorasextrasController } from "./controllers/HorasextrasController/DeleteHorasextrasController";
import { GetAllHorasextrasController } from "./controllers/HorasextrasController/GetAllHorasextrasController";
import { UpdateHorasextrasController } from "./controllers/HorasextrasController/UpdateHorasextrasController";

import { CreateUsuarioController } from "./controllers/UsuarioController/CreateUsuarioController";
import { DeleteUsuariosController } from "./controllers/UsuarioController/DeleteUsuarioController";
import { GetAllUsuarioController } from "./controllers/UsuarioController/GetAllUsuarioController";
import { UpdateUsuarioController } from "./controllers/UsuarioController/UpdateUsuarioController";

const routes = Router();

routes.post("/sobreavisos", new CreateSobreavisoController().handle);
routes.get("/sobreavisos", new GetAllSobreavisosController().handle);
routes.delete("/sobreavisos/:id", new DeleteSobreavisoController().handle);
routes.put("/sobreavisos/:id", new UpdateSobreavisoController().handle);

routes.post("/horasextras", new CreateHorasextrasController().handle);
routes.get("/horasextras", new GetAllHorasextrasController().handle);
routes.delete("/horasextras/:id", new DeleteHorasextrasController().handle);
routes.put("/horasextras/:id", new UpdateHorasextrasController().handle);

routes.post("/usuarios", new CreateUsuarioController().handle);
routes.get("/usuarios", new GetAllUsuarioController().handle);
routes.delete("/usuarios/:id", new DeleteUsuariosController().handle);
routes.put("/usuarios/:id", new UpdateUsuarioController().handle);

export { routes }