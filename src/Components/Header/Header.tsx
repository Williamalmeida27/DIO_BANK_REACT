import { 
    Box, 
    ChakraProvider, 
    Container } from '@chakra-ui/react'
import './Header.css'

export const Header = () => {
    return ( //Para trabalhar com a classe importada acima do css, usamos o className='Header'
        
    <ChakraProvider>
        <Container maxW='2x1' bg='#9413dc' h='45px' display='flex' alignItems='center' justifyContent='center'>
            <Box color='#ffffff'>
                <h1>DIO BANK</h1>
            </Box>            
        </Container>
    </ChakraProvider>      
        
    )

}