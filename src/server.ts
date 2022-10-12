import express from 'express';
import { patientRoutes } from './routes/patient.routes';

const api = express();

api.use(express.json());

api.use('/patient', patientRoutes)

api.listen(3333, () => {
    console.log('listening on port 3333');
})