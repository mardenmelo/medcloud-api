import { CreatePatientDTO } from "../DTO/PatientDTO";
import { Patient } from "../entities/Patient";
import { IPatientRepository } from "./IPatientRepository";
import { Repository, getRepository } from "typeorm"

class PatientRepository implements IPatientRepository {

    private repository: Repository<Patient>

    constructor() {
        this.repository = getRepository(Patient)
    }

    async create({ id, name, birthDate, email, street, houseNumber, district, city, state, zipCode }: CreatePatientDTO) : Promise<void> {
        
    const patient = this.repository.create({ id, name, birthDate, email, street, houseNumber, district, city, state, zipCode });

    await this.repository.save(patient);

    
    }
    
    async list(): Promise<Patient[]> {
        const patient = await this.repository.find();
        return patient

    }

    // findByEmail(email: string) {
    //     const patientEmail = this.patients.find((patientEmail) => patientEmail.email === email);
    //     return patientEmail;
    // }
}

export { PatientRepository };