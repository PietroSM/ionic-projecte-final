import { Client } from "./usuari";

export interface XatsResponse {
    xats: Xat[];
}



export interface Xat {
    id: string;
    vendedor: Client;
}


export interface Missatge {
    idMissatge?: string;
    idConversa: string;
    emisor?: string;
    text: string;
}