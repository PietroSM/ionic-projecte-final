import { Producte } from "./producte";

export interface Cistella {
    productes: liniaCistella[];
    idCistella: string;
    preuTotal: number;
}

export interface liniaCistella {
    producte: Producte;
    quantitat: number;
    preu: number;
}


export interface InsertarProducteCistella {
    idProducte: string;
    quantitat : number;
    preuTotal: number;
}