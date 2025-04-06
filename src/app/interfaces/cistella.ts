import { Producte } from "./producte";

export interface Cistella {
    productes: [
        producte: Producte,
        quantitat: number,
        preu: number,
    ];
    idCistella: string;
    preuTotal: number;
}


export interface InsertarProducteCistella {
    idProducte: string;
    quantitat : number;
    preuTotal: number;
}