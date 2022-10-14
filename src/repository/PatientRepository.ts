import { CreatePatientDTO } from "../DTO/PatientDTO";
import { Patient } from "../model/Patient";
import { IPatientRepository } from "./IPatientRepository";

class PatientRepository implements IPatientRepository {

    private patients: Patient[];

    private static INSTANCE: PatientRepository;

    private constructor() {
        this.patients = [];
    }

    public static getInstance(): PatientRepository {
        if(!PatientRepository.INSTANCE) {
            PatientRepository.INSTANCE = new PatientRepository();
        }
        return PatientRepository.INSTANCE;
    }

    create({
        id,
        name,
        birthDate,
        email,
        street,
        houseNumber,
        district,
        city,
        state,
        zipCode
    }: CreatePatientDTO) : void {
        
    const patientData = new Patient();

    Object.assign(patientData, {
        id,
        name,
        birthDate,
        email,
        street,
        houseNumber,
        district,
        city,
        state,
        zipCode
    });

    
        this.patients.push(patientData);
    }
    
    list(): Patient[] {
        return this.patients;

    }

    // findByEmail(email: string) {
    //     const patientEmail = this.patients.find((patientEmail) => patientEmail.email === email);
    //     return patientEmail;
    // }
}

export { PatientRepository };