import { 
    ChakraProvider, 
    Container, 
    Center, Input, 
    Button, 
    Box } from "@chakra-ui/react"
import { Layout } from "./Layout"
import { buttonClick } from "./services/button"

interface Icard {/*
    id: number,
    paragraph: string,
    details: string */
} 

export const Card = () => { //Usando a várivel criada no JS com a lib styled para o html: //o minHeidht é o tamanho mino da tela
    return (

        <Layout>

        <ChakraProvider>

            <Container maxW='2x1' bg='#9413dc' minHeight='100vh' padding='50px'>

                <Box backgroundColor='#ffffff' borderRadius='25px' padding='50px'>
                    <Center margin='25px'>
                        <h1>Faça o login:</h1>
                    </Center>

                    <Input placeholder='E-mail' />
                    <Input placeholder='Senha' marginTop='5px' />

                    <Center>
                        <Button onClick={buttonClick} colorScheme='teal' size='sm' width='100%' marginTop='10px'>
                            Entrar
                        </Button>
                    </Center>

                </Box>

            </Container>

        </ChakraProvider>

        </Layout>

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