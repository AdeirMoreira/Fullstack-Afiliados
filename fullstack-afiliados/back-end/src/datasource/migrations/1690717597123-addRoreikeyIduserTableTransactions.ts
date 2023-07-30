import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddForeikeyIduserTableTransactions1690717597123
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "Transaction",
      new TableColumn({
        name: "idUser",
        type: "int",
        isNullable: false,
      })
    );

    await queryRunner.createForeignKey(
      "Transaction",
      new TableForeignKey({
        name: "idUserFK",
        columnNames: ["idUser"],
        referencedTableName: "Users",
        referencedColumnNames: ["idUser"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('Transaction', 'idUserFK')
    await queryRunner.dropColumn('Transaction', 'idUser')
  }
}
