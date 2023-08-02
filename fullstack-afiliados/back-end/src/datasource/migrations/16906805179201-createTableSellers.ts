import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableSellers1690683179201 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Sellers",
        columns: [
          {
            name: "idSeller",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
            primaryKeyConstraintName: "idSellerPK",
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
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Sellers')
  }
}
