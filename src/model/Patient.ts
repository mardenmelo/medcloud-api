import { v4 as uuidV4 } from "uuid";

class Patient {
    id?: string | undefined;
    name: string | undefined;
    birthDate: string | undefined;
    email: string | undefined;
    street: string | undefined;
    houseNumber: string | undefined;
    district: string | undefined;
    city: string | undefined;
    state: string | undefined;
    zipCode: string | undefined;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    };
}

export { Patient };