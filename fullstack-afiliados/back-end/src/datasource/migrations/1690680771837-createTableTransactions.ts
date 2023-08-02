import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableTransactions1690680771837
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Transactions",
        columns: [
          {
            name: "idTransaction",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
            primaryKeyConstraintName: "idTransactionPK",
          },
          {
            name: "originFileName",
            type: "varchar",
            length: "250",
            isNullable: false,
          },
          {
            name: "typeTransaction",
            type: "int",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            length: "250",
            isNullable: false,
          },
          {
            name: "dateTransaction",
            type: "datetime",
            isNullable: false,
          },
          {
            name: "product",
            type: "varchar",
            length: "250",
            isNullable: false,
          },
          {
            name: "value",
            type: "int",
            isNullable: false,
          },
          {
            name: "seller",
            type: "varchar",
            length: "250",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "datetime",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "datetime",
            default: "now()",
          },
          {
            name: "deletedAt",
            type: "datetime",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Transactions')
  }
}
