import { Request, Response } from "express";
import { UpdateUsuarioService } from "../../services/UsuarioService/UpdateUsuarioService";

export class UpdateUsuarioController {
    async handle(request: Request, response: Response) {  
        const { id } = request.params;
        const {matricula, nome, perfil, cpf, email, senha} = request.body;
        
        const service = new UpdateUsuarioService;

        const result = await service.execute({id, matricula, nome, perfil, cpf, email, senha});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        
        return response.json(result);
    }
}