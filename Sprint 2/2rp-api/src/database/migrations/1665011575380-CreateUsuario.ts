import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsuario1665011575380 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuario",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: 'increment',
                        isNullable: false,
                    },
                    {
                        name: "matricula",
                        type: "varchar"
                    },
                    {
                        name: "nome",
                        type: "number"
                    },
                    {
                        name: "perfil",
                        type: "number"
                    },
                    {
                        name: "cpf",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "senha",
                        type: "varchar"
                    }                       
                ]
            })
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
