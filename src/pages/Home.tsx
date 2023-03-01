import { Center, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Card } from "../Components/Card"
import { DButton } from "../services/DButton";
import { Login } from "../services/login";

//Usando o styled em uma váriável para usarmos no html, usando o tamplete string para trabalhar o css


/* const Box = styled.div`
background-color: orange;
border-radius: 50px;
padding-left: 15px
`; Como não estamos usando o styled deixa ele comentado. Além de remover a importação import styled from 'styled-components';*/


const Home = () => {
    //Usando a várivel criada no JS com a lib styled para o html: //o minHeidht é o tamanho mino da tela
    //Usando estados:

    const [email, setEmail] = useState<string>('') //Criando um estado do tipo string e seu valor é string vazia.
    
    return (

        <Card>
            <Center margin='25px'>
                <h1>Faça o login:</h1>
            </Center>

            <Input placeholder='E-mail' value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder='Senha' marginTop='5px' />

            <Center>
                <DButton onClick={() => Login(email)} />
            </Center>
        </Card>

    )
}

export default Home;