import { Center, SimpleGrid, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { api } from "../api";
import { AppContext } from "../Components/AppContext";
import CardInfo from "../Components/CardInfo";

interface IUser {
    name: string
}

const ContaInfo = () => {
    const [userData, setUserData] = useState<null | IUser>()
    useEffect(() => {
        const getData = async () => {
            const data: any | IUser = await api
            setUserData(data)
        }
        getData()//Apenas chamando a função para dar o retorno
    }, [])
    const { user } = useContext(AppContext)

    return (

        <>
            <Center>
                <Text color='#ffffff' fontSize='xl' paddingTop={10}>
                    Informações da conta
                </Text>
            </Center>

            <Center>

                <SimpleGrid columns={2} spacing={8} paddingTop={16}>

                    <CardInfo mainContent={`Nome: `} content={`${userData?.name}`} />
                    <CardInfo mainContent={`E-mail: `} content={`${user}`} />
                    <Link to='/conta/1'>
                        <Text color='#ffffff'>
                            {`< Conta`}
                        </Text>
                    </Link>
                </SimpleGrid>

            </Center>
        </>
    )
}

export default ContaInfo;