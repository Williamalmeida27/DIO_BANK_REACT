import { Center, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Components/AppContext";
import { Card } from "../Components/Card"
import { DButton } from "../services/DButton";
import { changeLocalStorage } from "../services/localStorage";
import { Login } from "../services/login";

const Home = () => {
    //Usando a várivel criada no JS com a lib styled para o html: //o minHeidht é o tamanho mino da tela
    //Usando estados:

    // const [email, setEmail] = useState<string>('') //Criando um estado do tipo string e seu valor é string vazia.
    const {user, setUser, password, setPassword, setIsLoggedIn} = useContext(AppContext); //Trazendo o context porém desestruturado pegando apenas o logado

    const navigate = useNavigate(); //Adicionando váriavel de navegação
    const validateUser = async (user: string, password: string) => { //Função para validar se um usário está logado e se sim direcionar para pag
        const loggedIn = await Login(user, password)

        
        if (!loggedIn) {
            return alert('E-mail inválido')
            
        } else{ 
        
        setIsLoggedIn(true)
        changeLocalStorage({login: true, usuario: user, senha: password})
        navigate('/conta/1')

        }
        
    }

    return (

        <Card>
            <Center margin='25px'>
                Faça o login:
            </Center>

            <Input placeholder='E-mail' value={user} onChange={(event) => setUser(event.target.value)} />
            <Input placeholder='Senha' value={password} onChange={(event) => setPassword(event.target.value)} marginTop='5px' />
            

            <Center>
                <DButton onClick={() => validateUser(user, password)} />
            </Center>
        </Card>

    )
}

export default Home;