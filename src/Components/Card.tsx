import { 
    Center, Input,
    Box } from "@chakra-ui/react"
import { DButton } from "../services/DButton";
import { Login } from "../services/login";
import { useState } from "react";



export const Card = () => { //Usando a várivel criada no JS com a lib styled para o html: //o minHeidht é o tamanho mino da tela
    //Usando estados:

    const [email, setEmail] = useState<string>('') //Criando um estado do tipo string e seu valor é string vazia.
    

    return (        
            

                <Box backgroundColor='#ffffff' borderRadius='25px' padding='50px'>
                    <Center margin='25px'>
                        <h1>Faça o login:</h1>
                    </Center>

                    <Input placeholder='E-mail' value={email} onChange={(event) => setEmail(event.target.value)} />
                    <Input placeholder='Senha' marginTop='5px' />

                    <Center>
                    <DButton onClick={() => Login(email)}/>
                    </Center>             

                </Box>

        /* 
            <div>
                <h1>{id}</h1>
                <p>{paragraph}</p>
                <p>{details}</p>
            </div> */

        /* Em vez de usar o componente layout direto, vamos por tudo dentro do chackra UI além de tirar a
    resposabilidade do styled component direto.    
    <Layout>
      <Box>
      <h1>Faça o login:</h1>
      </Box>
      <label htmlFor='emailInput'>
        Email
      </label>
      <input type="email" id='emailInput' />
      <label htmlFor='passwordInput'>
        Senha
      </label>
      <input type="password" id='passwordInput' />
      <button>Entrar</button>
    </Layout> */

    )
}