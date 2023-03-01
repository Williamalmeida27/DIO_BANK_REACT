import { api } from "../api"


export const Login = async (email: string): Promise<any> => { //Usando asinc para tratar uma promisse que teráum retorno do tipo qualquer
   const data: any = await api //Estamos usando função nativa do JS, para os teste em TS é necessário um conversão.
    //Definimos que uma várivael do tipo any no momento, recebe a solução da api.

    if (email !== data.email) {
        return alert('E-mail inválido')
    }

    alert(`Bem vindo ${email}`)
}