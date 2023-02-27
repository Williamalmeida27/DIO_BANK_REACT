
import { Header } from "./Header/Header"

export const Layout = ({children}: any) => {
    return ( //Operador diamente é para indicar que é o elemnto Pai com suas filhas.
        <>
            <Header />

            {children}

        </>
    )
} 