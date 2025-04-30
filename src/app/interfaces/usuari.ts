export interface Usuari {
    id?: string;
    alies: string;
    contrasenya: string;
    nom: string;
    cognom: string;
    correu: string;
    imatge: string;
    lat: number;
    lng: number;
    adresa?: string;
}


export interface UsuariLogin {
    alies: string;
    contrasenya: string;
    lat?: number;
    lng?: number;
}


export interface Client {
    id: string;
    nom: string;
    cognom: string;
    correu: string;
    imatge: string;
    lat: number;
    lng: number;
}


