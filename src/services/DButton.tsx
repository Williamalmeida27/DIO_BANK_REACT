import { Button } from "@chakra-ui/react"

interface IDButton{
   // onClick: () => void; //Porém podemos passar o evento direto: MouseEventHandler
   onClick: () => any;
}

//Usando interface com propriedade de evento

export const DButton = ({onClick}: IDButton) => { //Usando a interface
    return(
        <Button //Inserindo o retorno que será dada a própriedade
        onClick={onClick}
        colorScheme='teal'
        size='sm'
        width='100%'
        marginTop='5px'        
        >

            Entrar

        </Button>

    )
}