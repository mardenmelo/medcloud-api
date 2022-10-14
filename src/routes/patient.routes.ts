import { Router } from "express";
import { createPatientController } from "../useCases/CreatePatient";
import { listPatientsController } from "../useCases/listPatients";

const patientRoutes = Router();

patientRoutes.post('/', (request, response) => {
    return createPatientController.handle(request, response);
});

patientRoutes.get('/', (request, response) => {
    return listPatientsController.handle(request, response);
});


export { patientRoutes };