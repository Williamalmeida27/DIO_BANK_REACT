import { Box } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
import './Header.css'

export const Header = () => {
    const context = useContext(AppContext)//Trazendo o estado global do conext criado no app
    console.log(context) //Testando do estado

    return ( //Para trabalhar com a classe importada acima do css, usamos o className='Header'

        <Box color='#ffffff' marginBottom='50px' height='45px' display='flex' alignItems='center' justifyContent='center' bg='#ff4538' borderBottomStyle='inherit' borderBottomWidth='5px'>
            <h1>DIO BANK</h1>
        </Box>

    )

}