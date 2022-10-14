import { CreatePatientDTO } from "../../DTO/PatientDTO";
import { IPatientRepository } from "../../repository/IPatientRepository";

class CreatePatientUseCase {
    constructor(private patientRepository: IPatientRepository) {
    }

    async execute({ id, name, birthDate, email, street, houseNumber, district, city, state, zipCode} : CreatePatientDTO): Promise<void> {
        
    // const patientEmailExists = this.patientRepository.findByEmail(email);

    // if(patientEmailExists) {
    //     throw new Error("Patient already exists");
    // }

    await this.patientRepository.create({
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
    }
}

export { CreatePatientUseCase };