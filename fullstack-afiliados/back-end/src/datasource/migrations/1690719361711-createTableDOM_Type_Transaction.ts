import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableDOMTypeTransaction1690719361711
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "DOM_Type_Transaction",
        columns: [
          {
            name: "idTransaction",
            type: "int",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            length: "250",
            isNullable: false,
          },
          {
            name: "nature",
            type: "varchar",
            length: "250",
            isNullable: false,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("DOM_Type_Transaction");
  }
}
