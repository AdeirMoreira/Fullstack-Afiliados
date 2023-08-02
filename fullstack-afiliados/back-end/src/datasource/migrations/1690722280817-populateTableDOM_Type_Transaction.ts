import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateTableDOMTypeTransaction1690722280817
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO DOM_Type_Transaction (idTransaction, description, nature) VALUES 
      (1, 'venda produto', '+'),
      (2, 'venda afiliado', '+'),
      (3, 'comissão paga', '-'),
      (4, 'comissão recebida', '+')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
