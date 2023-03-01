import { Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Components/AppContext";
import { Card } from "../Components/Card"
import { DButton } from "../services/DButton";
import { Login } from "../services/login";

const Home = () => {
    //Usando a várivel criada no JS com a lib styled para o html: //o minHeidht é o tamanho mino da tela
    //Usando estados:

    const [email, setEmail] = useState<string>('') //Criando um estado do tipo string e seu valor é string vazia.
    const {setIsLoggedIn} = useContext(AppContext); //Trazendo o context porém desestruturado pegando apenas o logado
    const navigate = useNavigate(); //Adicionando váriavel de navegação

    const validateUser = async (email: string) => { //Função para validar se um usário está logado e se sim direcionar para pag
        const loggedIn = await Login(email)
        
        if (!loggedIn) {
            return alert('E-mail inválido')
            
        } else{            
        
        setIsLoggedIn(true)
        navigate('/conta/1')

        }
        
    }

    return (

        <Card>
            <Center margin='25px'>
                <h1>Faça o login:</h1>
            </Center>

            <Input placeholder='E-mail' value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder='Senha' marginTop='5px' />

            <Center>
                <DButton onClick={() => validateUser(email)} />
            </Center>
        </Card>

    )
}

export default Home;