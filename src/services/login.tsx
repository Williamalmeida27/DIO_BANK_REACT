import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../api"
import { AppContext } from "../Components/AppContext"


export const Login = async (email: string): Promise<any> => { //Usando asinc para tratar uma promisse que teráum retorno do tipo qualquer
   const {setIsLoggedIn} = useContext(AppContext); //Trazendo o context porém desestruturado pegando apenas o logado
   const navigate = useNavigate(); //Adicionando váriavel de navegação
   
   
    const data: any = await api //Estamos usando função nativa do JS, para os teste em TS é necessário um conversão.
    //Definimos que uma várivael do tipo any no momento, recebe a solução da api.

    if (email !== data.email) {
        return alert('E-mail inválido')
    }

    setIsLoggedIn(true)
    navigate(`/${data.id}`)

    alert(`Bem vindo ${email}`)
}