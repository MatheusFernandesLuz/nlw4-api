import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateUserEmail1614088867728 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "Users",
      "email",
      new TableColumn({
        name: "email",
        type: "string",
        isUnique: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.rollbackTransaction();
  }
}
