import { Request, Response } from "express";
import { GetAllUsuarioService } from "../../services/UsuarioService/GetAllUsuarioService";

export class GetAllUsuarioController {
    async handle(request: Request, response: Response) {
        const service = new GetAllUsuarioService

        const usuarios = await service.execute();

        return response.json(usuarios);
    }
}