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
    adresa?: number;
}


export interface UsuariLogin {
    alies: string;
    contrasenya: string;
    lat?: number;
    lng?: number;
}



