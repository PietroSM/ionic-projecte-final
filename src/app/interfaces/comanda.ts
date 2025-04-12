import { liniaCistella } from "./cistella";

export interface InsertarComanda {
    productes: liniaCistella[];
    idCistella: string;
    idVendedor: string;
    preuTotal: number;
}

