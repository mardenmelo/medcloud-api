import { CreatePatientDTO } from "../DTO/PatientDTO";
import { Patient } from "../model/Patient";

interface IPatientRepository {
    //findByEmail(email: string): Patient;
    list(): Patient[];
    create({id, birthDate, name, email, street, houseNumber, district, city, state, zipCode} : CreatePatientDTO): void;
}

export { IPatientRepository };