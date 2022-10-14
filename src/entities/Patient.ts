import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryColumn, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("Patient")
class Patient {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    name: string;

    @Column()
    birthDate: string;

    @Column()
    email: string;

    @Column()
    street: string;

    @Column()
    houseNumber: string;

    @Column()
    district: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    zipCode: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    };
}

export { Patient };