export interface PlaneteI {
    id: number;
    libelle: string;
}

export class Planete implements PlaneteI {
    id: number = 0;
    libelle: string = '';
}

