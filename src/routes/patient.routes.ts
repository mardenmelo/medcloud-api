import { response, Router } from "express";
import { Patient } from "../model/Patient";
import { PatientRepository } from "../repository/PatientRepository";

const patientRoutes = Router();
const patientRepository = new PatientRepository();

patientRoutes.post('/', (req, res) => {
    const {
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
    } = req.body;

    patientRepository.create({
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

    return res.status(201).send();
    });

patientRoutes.get('/', (req, res) => {
    const allPatients = patientRepository.list();

    return res.json(allPatients);
});


export { patientRoutes };