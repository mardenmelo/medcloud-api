import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePatients1665723229978 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "patients",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"birthDate",
                        type:"varchar"
                    },
                    {
                        name:"email",
                        type:"varchar",
                    },
                    {
                        name:"street",
                        type:"varchar"
                    },
                    {
                        name:"houseNumber",
                        type:"varchar"
                    },
                    {
                        name:"district",
                        type:"varchar"
                    },
                    {
                        name:"city:",
                        type:"varchar"
                    },
                    {
                        name:"state",
                        type:"varchar"
                    },
                    {
                        name:"zipCode",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("patients")
    }

}
