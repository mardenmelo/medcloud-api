import { CreatePatientDTO } from "../DTO/PatientDTO";
import { Patient } from "../entities/Patient";

interface IPatientRepository {
    //findByEmail(email: string): Patient;
    list(): Promise<Patient[]>;
    create({id, birthDate, name, email, street, houseNumber, district, city, state, zipCode} : CreatePatientDTO): Promise<void>;
}

export { IPatientRepository };