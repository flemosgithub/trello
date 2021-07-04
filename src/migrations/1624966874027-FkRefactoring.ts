import {MigrationInterface, QueryRunner} from "typeorm";

export class FkRefactoring1624966874027 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE public.task RENAME CONSTRAINT "userListId" TO "Fk_userList"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE public.task RENAME CONSTRAINT "Fk_userList" TO "userListId"`);
    }

}
