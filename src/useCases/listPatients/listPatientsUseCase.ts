import { Patient } from "../../model/Patient";
import { IPatientRepository } from "../../repository/IPatientRepository";

class ListPatientsUseCase {
    constructor(private patientRepository: IPatientRepository) {

    }

    execute(): Patient[] {
        const patients = this.patientRepository.list();
        return patients;
    }
}

export { ListPatientsUseCase };