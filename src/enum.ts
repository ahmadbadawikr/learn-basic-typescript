export enum CustomerType {
    REGULAR = "REGULAR",
    GOLD = "GOLD",
    OPTIMA = "OPTIMA"
}

export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}