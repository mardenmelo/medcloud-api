import { CreatePatientDTO } from "../DTO/PatientDTO";
import { Patient } from "../entities/Patient";
import { IPatientRepository } from "./IPatientRepository";
import { Repository, getRepository } from "typeorm"

class PatientRepository implements IPatientRepository {

    private repository: Repository<Patient>

    private static INSTANCE: PatientRepository;

    private constructor() {
        this.repository = getRepository(Patient)
    }

    public static getInstance(): PatientRepository {
        if(!PatientRepository.INSTANCE) {
            PatientRepository.INSTANCE = new PatientRepository();
        }
        return PatientRepository.INSTANCE;
    }

    async create({ id, name, birthDate, email, street, houseNumber, district, city, state, zipCode }: CreatePatientDTO) : Promise<void> {
        
    const patient = this.repository.create({ id, name, birthDate, email, street, houseNumber, district, city, state, zipCode });

    await this.repository.save(patient);

    
    }
    
    async list(): Promise<Patient[]> {
        const patients = await this.repository.find();
        return patients

    }

    // findByEmail(email: string) {
    //     const patientEmail = this.patients.find((patientEmail) => patientEmail.email === email);
    //     return patientEmail;
    // }
}

export { PatientRepository };