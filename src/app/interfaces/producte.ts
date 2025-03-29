import { Client } from "./usuari";

export interface InsertarProducte {
    nom: string;
    stock: number;
    preu: number;
    imatge: string;
    lat: number;
    lng: number;
    enviament: boolean;
    recogida: boolean;
    temporada: string;
    tipus: string;
}



export interface Producte extends InsertarProducte {
    id: string;
    client: Client;
    distancia?: number;
    propietat?: boolean;
}