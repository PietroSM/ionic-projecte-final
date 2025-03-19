import { Usuari } from "./usuari";

export interface InsertarProducte {
    nom: string;
    stock: number;
    preu: string;
    imatge: string;
    lat: number;
    lng: number;
    enviament: boolean;
    recogida: boolean;
    temporada: string;
    tipus: string;
}



export interface Producte extends InsertarProducte {
    id: number;
    client: Usuari;
    distancia: number;
    propietat: boolean;
}