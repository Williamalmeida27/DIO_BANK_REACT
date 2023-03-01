import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";
import CardInfo from "../Components/CardInfo";

interface IUserData {
    email: string
    password: string
    name: string
    balance: number,
    id: string
}

const Conta = () => {

    const [userData, setUserData] = useState<null | IUserData>() //Neste estado estamos defindo que el pode receber um valor nullo ou do tipo IUserData
    //Esta tipagem é do typescript e importante para sabermoso tipo que vem daquele objeto.

    useEffect(() => { //Usando o efect para tratar uma promisse
        const getData = async () => { //informando que deve espera a chamda da api e assim que resolvido armazena na variavel
            const data: any | IUserData = await api //Aqui estou dizendo que a várivel receber do tipo qualquer ou da interface
            setUserData(data)
        }
        getData()//Apenas chamando a função para dar o retorno
    }, []) //Este array ao final do useEffect é para da um stop da renderização da função.

    //Ao chamar o userData?.name estou indicando que ele deve validar se esta definido algo, se
    // não ele não imprimi nada, mas se tive poderá impirmir.

    const actualData = new Date();

    const {id} = useParams() //Metodo do react dom para receber parametros.
    const navigate = useNavigate()
    
    

    if (userData && id !== userData.id) {
        navigate('/')
        
    }

    return (

        <>

            {userData === null || userData === undefined ?
                <Center>

                    <Spinner size={"xl"} color='#ffffff'/>

                </Center>

                :
                <Center>
                    <SimpleGrid columns={2} spacing={8} paddingTop={16}>

                        <CardInfo
                            mainContent={`Bem vindo ${userData?.name}!`}
                            content={`${actualData.getDay()}
            /${actualData.getMonth()}
            /${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}
                        />

                        <CardInfo
                            mainContent="Saldo"
                            content={`R$ ${userData?.balance}`}
                        />

                    </SimpleGrid>

                </Center>

            }

        </>


    )
}

export default Conta;