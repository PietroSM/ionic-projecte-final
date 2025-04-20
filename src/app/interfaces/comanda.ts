import { liniaCistella } from "./cistella";
import { Client } from "./usuari";

export interface InsertarComanda {
    productes: liniaCistella[];
    idCistella: string;
    idVendedor: string;
    preuTotal: number;
}

export interface UpdateComanda {
    id: string;
    estatComanda: string;
}


export interface Comanda {
    id: string
    client: Client;
    productes: liniaCistella[];
    preuTotal: number;
    estatComanda: string;
    enviament: boolean;
    puntRecogida: boolean;
    Vendedor: Client;
    me?: boolean;
}