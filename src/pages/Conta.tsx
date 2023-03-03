import { Box, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { api } from "../api";
import { AppContext } from "../Components/AppContext";
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

    const { id } = useParams() //Metodo do react dom para receber parametros.
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext) //Trazendo o contexto do paramtero logado.

    !isLoggedIn && navigate('/') //Testanto se o parametro for verdadeiro ele navega para /, lembrando que esse valor vai de acordo com true ou false la do context


    if (userData && id !== userData.id) {
        navigate('/')

    }

    return (

        <>
            {userData === null || userData === undefined ?
                <Center>
                    <Spinner size={"xl"} color='#ffffff' />
                </Center>
                : <>
                    <Center>
                        <Text color='#ffffff' fontSize='xl' paddingTop={10}>
                           Conta
                        </Text>
                    </Center>
                    <Center>
                        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                            <CardInfo
                                mainContent={`Bem vindo ${userData?.name}!`}
                                content={`${actualData.getDay()}
                                        /${actualData.getMonth()}
                                         /${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}
                            />
                            <CardInfo
                                mainContent={`Conta: ${userData?.id}`}
                                content={`Saldo R$ ${userData?.balance}`}
                            />
                            <Link to='/infoconta'>
                                <Text color='#ffffff' padding='15px'>
                                    Mais informações
                                </Text>
                            </Link>
                        </SimpleGrid>
                    </Center>
                </>

            }

        </>
    )
}

export default Conta;