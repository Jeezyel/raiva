import { Perfil } from "./perfil.model";
import { Telefone } from "./telefone.model";


export class Usuario {
    id!: number;
    nome!: string;
    cpf!: string;
    login!: string;
    senha!: string;
    perfil!: Perfil;
    telefone!: Telefone;

}
