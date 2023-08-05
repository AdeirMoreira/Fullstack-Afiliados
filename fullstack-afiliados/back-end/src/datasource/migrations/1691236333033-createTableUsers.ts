import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableUsers1691236333033 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Users",
                columns: [
                  {
                    name: "idUser",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                    primaryKeyConstraintName: "idUserPK",
                  },
                  {
                    name: "name",
                    type: "varchar",
                    length: "250",
                    isNullable: false,
                  },
                  {
                    name: "email",
                    type: "varchar",
                    length: "250",
                    isNullable: false,
                    isUnique: true
                  },
                  {
                    name: "password",
                    type: "varchar",
                    length: "250",
                    isNullable: false,
                  },
                  {
                    name: "admin",
                    type: "boolean",
                    isNullable: false,
                  },
                  {
                    name: "createdAt",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                  },
                  {
                    name: "updatedAt",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                  },
                  {
                    name: "deletedAt",
                    type: "timestamp",
                    isNullable: true,
                  },
                ],
              })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Users')
    }

}
