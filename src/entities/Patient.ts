import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";

@Entity("patients")
class Patient {
    @PrimaryColumn()
    id?: string | undefined;

    @Column()
    name: string | undefined;

    @Column()
    birthDate: string | undefined;

    @Column()
    email: string | undefined;

    @Column()
    street: string | undefined;

    @Column()
    houseNumber: string | undefined;

    @Column()
    district: string | undefined;

    @Column()
    city: string | undefined;

    @Column()
    state: string | undefined;

    @Column()
    zipCode: string | undefined;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    };
}

export { Patient };