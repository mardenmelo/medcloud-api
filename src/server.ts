
import { SwaggerUiOptions } from 'swagger-ui-express';
import './database';
import { patientRoutes } from './routes/patient.routes';

const express = require("express");
const api = express();

api.use(express.json());

api.use('/patient', patientRoutes)

api.listen(3333, () => {
    console.log('listening on port 3333');
})