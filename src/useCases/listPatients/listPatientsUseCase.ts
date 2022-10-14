import { Patient } from "../../entities/Patient";
import { IPatientRepository } from "../../repository/IPatientRepository";

class ListPatientsUseCase {
    constructor(private patientRepository: IPatientRepository) {

    }

    async execute(): Promise<Patient[]> {
        const patients = await this.patientRepository.list();
        return patients;
    }
}

export { ListPatientsUseCase };