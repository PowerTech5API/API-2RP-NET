import { getRepository } from "typeorm";
import { Usuario } from "../../entities/Usuario";

export class GetAllUsuarioService{
    async execute() {
        const repo = getRepository(Usuario);

        const usuario = await repo.find();

        return usuario;
    }
}