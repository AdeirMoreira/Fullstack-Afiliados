import { MigrationInterface, QueryRunner } from "typeorm";

export class PopulateTableDOMTypeTransaction1690722280817
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO DOM_Type_Transaction (idTransaction, description, nature) VALUES 
      (1, 'product sale', '+'),
      (2, 'affiliate sale', '+'),
      (3, 'commission paid', '-'),
      (4, 'commission received', '+')
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
