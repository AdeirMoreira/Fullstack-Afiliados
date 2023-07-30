import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsers1690683179201 implements MigrationInterface {
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
            generationStrategy: "identity",
            primaryKeyConstraintName: "idUserPK",
          },
          {
            name: "name",
            type: "varchar",
            length: "250",
            isNullable: false,
          },
          {
            name: "balance",
            type: "int",
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
            default: "CURRENT_TIMESTAMP",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Users')
  }
}
