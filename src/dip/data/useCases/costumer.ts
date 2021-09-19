import { Costumer, IEnterpriseCostumer } from "../../domain/useCases/shoppingCart/customer";

export class IndividualCostumer implements Costumer {
    firstName: string
    lastName: string
    cpf: string

    constructor
    (
        firstName: string,
        lastName: string,
        cpf: string,
    ) 
    {
        this.firstName = firstName
        this.lastName = lastName
        this.cpf = cpf
    }
}
export class enterpriseCostumer implements IEnterpriseCostumer {
    name: string
    cnpj: string
    constructor
    (
       name: string, cnpj: string
    ) 
    {
        this.name = name
        this.cnpj = cnpj
    }
}