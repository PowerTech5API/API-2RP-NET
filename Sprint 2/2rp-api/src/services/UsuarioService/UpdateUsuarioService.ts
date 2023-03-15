import { getRepository } from "typeorm";
import { Usuario } from "../../entities/Usuario";

type UsuarioUpdateRequest = {
    id: string;
    matricula: string;
    nome: string;
    perfil: number;
    cpf: string;
    email: string;
    senha: string;
}

export class UpdateUsuarioService{
    // atualizar campos
    async execute({id, matricula, nome, perfil, cpf, email,senha}: UsuarioUpdateRequest) {
        const repo = getRepository(Usuario);

        const usuario = await repo.findOne(id);

        if (!usuario){
            return new Error("Usuário não existe");
        }   
        
        usuario.id = id;
        usuario.matricula = matricula;
        usuario.nome = nome;
        usuario.perfil = perfil;
        usuario.cpf = cpf;
        usuario.email = email;
        usuario.senha = senha;

        await repo.save(usuario);

        return usuario;
    }    
}