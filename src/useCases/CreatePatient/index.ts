import { PatientRepository } from "../../repository/PatientRepository";
import { CreatePartientController } from "./CreatePatientController";
import { CreatePatientUseCase } from "./CreatePatientUseCase";

export default () => {
    const patientRepository = new PatientRepository();
    const createPatientUseCase = new CreatePatientUseCase(patientRepository);
    const createPatientController = new CreatePartientController(createPatientUseCase);

    return createPatientController;
}
