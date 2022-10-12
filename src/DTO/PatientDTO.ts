interface CreatePatientDTO {
    id?: string;
    name: string;
    birthDate: string;
    email: string;
    street: string;
    houseNumber: string;
    district: string;
    city: string;
    state: string;
    zipCode: string;
};

export { CreatePatientDTO };