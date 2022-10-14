import { Request, Response } from "express";
import { CreatePatientUseCase } from "./CreatePatientUseCase";

class CreatePartientController {

    constructor(private createPatientUseCase: CreatePatientUseCase) {
    };

    async handle(request: Request, response: Response): Promise<Response> {
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
        } = request.body;
    
        await this.createPatientUseCase.execute({ id, name, birthDate, email, street, houseNumber, city, district, state, zipCode});
    
    
        return response.status(201).send();
    }
}

export { CreatePartientController };