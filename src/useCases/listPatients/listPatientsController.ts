import { Request, Response } from "express";
import { ListPatientsUseCase } from "./listPatientsUseCase";

class ListPatientsController {
    constructor(private listPatientsUseCase: ListPatientsUseCase){

    }

    handle(request: Request, response: Response) {
        const allPatients = this.listPatientsUseCase.execute();

        return response.json(allPatients);
    }
}

export { ListPatientsController };