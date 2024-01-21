import { SPABaseObjectDTO } from "./SPABaseObjectDTO";

export class BudgetDTO extends SPABaseObjectDTO {
    currencyId: string;
    from: number;
    to: number;
    name: string;
}