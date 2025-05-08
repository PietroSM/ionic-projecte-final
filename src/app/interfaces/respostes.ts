import { Cistella, liniaCistella } from "./cistella";
import { Comanda } from "./comanda";
import { Producte } from "./producte";
import { Client, Usuari } from "./usuari";

export interface TokenResponse {
    accesToken: string;
}


export interface SingleUsuariResponse {
    usuari: Usuari;
}

export interface SingleProducteResponse {
    producte: Producte;
}

export interface SingleComandaResponse {
    comanda: Comanda;
}

export interface ProductesResponse {
    productes: Producte[];
    niHaMes: boolean;
}


export interface SingleCistellaResponse {
    productes: liniaCistella[];
    idCistella: string;
    preuTotal: number;
} 
export interface CistellaResponse {
    resultat: string;
}

export interface ComandaResponse {
    idComanda: string;
}

export interface ComandesResponse {
    comandes: Comanda[];
}

export interface SingleIdClient {
    idClient: string;
}

export interface SingleClientResponse {
    client: Client;
}

export interface SingleClientResponse {
    usuari: Usuari;
}