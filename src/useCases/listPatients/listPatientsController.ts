import { Request, Response } from "express";
import { ListPatientsUseCase } from "./listPatientsUseCase";

class ListPatientsController {
    constructor(private listPatientsUseCase: ListPatientsUseCase){

    }

    async handle(request: Request, response: Response): Promise<Response> {
        const allPatients = await this.listPatientsUseCase.execute();

        return response.json(allPatients);
    }
}

export { ListPatientsController };