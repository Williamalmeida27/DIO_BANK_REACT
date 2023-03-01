
import { Box } from "@chakra-ui/react"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
    return ( //Operador diamente <></> é para indicar que é o elemnto Pai com suas filhas.
        <Box backgroundColor='#9413dc' minHeight='100vh'>
            <Header />

            {children}

        </Box>

    )
} 