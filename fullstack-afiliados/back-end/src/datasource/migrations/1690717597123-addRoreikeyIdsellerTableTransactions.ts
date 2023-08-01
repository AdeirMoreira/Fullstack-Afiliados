import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddForeikeyIdsellerTableTransactions1690717597123
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "Transaction",
      new TableColumn({
        name: "idSellerId",
        type: "int",
        isNullable: false,
      })
    );

    await queryRunner.createForeignKey(
      "Transaction",
      new TableForeignKey({
        name: "idSellerFK",
        columnNames: ["idSellerId"],
        referencedTableName: "Sellers",
        referencedColumnNames: ["idSeller"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('Transaction', 'idSellerFK')
    await queryRunner.dropColumn('Transaction', 'idSellerId')
  }
}
