import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/localStorage'
import { AppContext } from '../AppContext'
import './Header.css'

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)//Trazendo o estado global do conext criado no app
    const navigate = useNavigate()

    const logout = () => {
        
        setIsLoggedIn(false)
        changeLocalStorage({login: false, usuario: '', senha: '',})   
        navigate('/')
    }

    return ( //Para trabalhar com a classe importada acima do css, usamos o className='Header'
        
        <Flex backgroundColor='#ff4538' borderBottomStyle='inherit' borderBottomWidth='5px' padding='5px'>
            <Box>
                <Text fontSize='3xl' color='#ffffff'>
                    WiLL BANK
                </Text>
            </Box>
            {
                isLoggedIn && (
                    <>
                        <Spacer />
                        <Button onClick={() => logout()}>
                            SAIR
                        </Button>

                    </>
                )
            }

        </Flex>


    )

}