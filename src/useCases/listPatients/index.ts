import { PatientRepository } from "../../repository/PatientRepository";
import { ListPatientsController } from "./listPatientsController";
import { ListPatientsUseCase } from "./listPatientsUseCase";

const patientRepository = PatientRepository.getInstance();
const listPatientsUseCase = new ListPatientsUseCase(patientRepository);
const listPatientsController = new ListPatientsController(listPatientsUseCase);

export { listPatientsController };