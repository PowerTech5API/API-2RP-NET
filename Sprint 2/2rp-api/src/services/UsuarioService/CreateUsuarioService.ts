import { getRepository } from "typeorm";
import { Usuario } from "../../entities/Usuario";

type UsuarioRequest = {
    matricula: string;
    nome: string;
    perfil: number;
    cpf: string;
    email: string;
    senha: string;
}

export class CreateUsuarioService {
    async execute({ matricula, nome, perfil, cpf, email, senha }: UsuarioRequest): Promise<Usuario | Error> {
        const repo = getRepository(Usuario);

        const usuario = repo.create({
            matricula,
            nome,
            perfil,
            cpf,
            email,
            senha
        })

        await repo.save(usuario);

        return usuario;
    }
}