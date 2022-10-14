import { PatientRepository } from "../../repository/PatientRepository";
import { CreatePartientController } from "./CreatePatientController";
import { CreatePatientUseCase } from "./CreatePatientUseCase";

const patientRepository = PatientRepository.getInstance();
const createPatientUseCase = new CreatePatientUseCase(patientRepository);
const createPatientController = new CreatePartientController(createPatientUseCase);

export { createPatientController };