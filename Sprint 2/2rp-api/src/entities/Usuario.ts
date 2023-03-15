import {Entity, Column, PrimaryColumn} from "typeorm";
import { v1 as uuid } from "uuid"

@Entity("usuario")
export class Usuario{

    @PrimaryColumn()
    id: string;
    
    @Column()
    matricula: string;
    
    @Column()
    nome: string;

    @Column()
    perfil: number;

    @Column()
    cpf: string;
    
    @Column()
    email: string;
    
    
    @Column()
    senha: string;
    
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}