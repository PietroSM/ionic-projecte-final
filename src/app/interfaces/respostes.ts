import { Producte } from "./producte";
import { Usuari } from "./usuari";

export interface TokenResponse {
    accesToken: string;
}


export interface SingleUsuariResponse {
    usuari: Usuari;
}

export interface SingleProducteResponse {
    producte: Producte;
}


export interface ProductesResponse {
    productes: Producte[];
}