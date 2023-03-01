import { 
    Box } from '@chakra-ui/react'
import './Header.css'

export const Header = () => {
    return ( //Para trabalhar com a classe importada acima do css, usamos o className='Header'
        
            <Box color='#ffffff' marginBottom='50px' height='45px' display='flex' alignItems='center' justifyContent='center' bg='#ff4538' borderBottomStyle='inherit' borderBottomWidth='5px'>
                <h1>DIO BANK</h1>
            </Box>  
        
    )

}