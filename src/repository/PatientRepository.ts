import { CreatePatientDTO } from "../DTO/PatientDTO";
import { Patient } from "../model/Patient";

class PatientRepository {

    private patients: Patient[];

    constructor() {
        this.patients = [];
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
}

export { PatientRepository };