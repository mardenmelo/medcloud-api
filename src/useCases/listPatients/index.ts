import { PatientRepository } from "../../repository/PatientRepository";
import { ListPatientsController } from "./listPatientsController";
import { ListPatientsUseCase } from "./listPatientsUseCase";

export default() => {
    const patientRepository = new PatientRepository();
    const listPatientsUseCase = new ListPatientsUseCase(patientRepository);
    const listPatientsController = new ListPatientsController(listPatientsUseCase);

    return listPatientsController;
}


