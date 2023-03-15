import { Request, Response } from "express";
import { CreateUsuarioService } from "../../services/UsuarioService/CreateUsuarioService";

export class CreateUsuarioController {
    async handle(request: Request, response: Response){
        const {matricula, nome, perfil, email, cpf, senha} = request.body;

        const service = new CreateUsuarioService();

        const result = await service.execute({matricula, nome, perfil, email, cpf, senha});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}