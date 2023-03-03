import { Box, Center } from "@chakra-ui/react"


export const Card = ({ children }: any) => {

  return (
    <Center>
      <Box backgroundColor='#ffffff' borderRadius='25px' padding='120px' marginTop='50px'>
        {children}
      </Box>
    </Center>

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