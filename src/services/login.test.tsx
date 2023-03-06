import { Login } from "./login";

//Realizando testes

describe('Login', () => {
    const mockEmail = 'Bank@gmail.com'
    const mockSenha = '12345'

    

    it('Deve exibir um com boas vindas se o e-mail for válido', async () => {//Testando se o que está na função login é um alert.
        const response = await Login(mockEmail, mockSenha) //Espere o email
        expect(response).toBeTruthy()
    }); //Neste teste estou aguardando o email mockado, e esperando que setlogado seja true e lá da service login, além de passa um parametro id '/1' para que este teste funcione.

    it('Deve exibir um erro caso o e-mail seja inválido ', async () => {
       const response = await Login('Email@invalido.com ou ','Senha inválido')
       expect(response).toBeFalsy()
        
    });

})

/* Desestruturando uma lib do react para acessar o nosso componente setloggin:
const mockSetIsLoggedIn = jest.fn()

jest.mock('react', () =>({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

//Desestruturando outra lib:

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
        
    })
)
COmentando os mock acima, pois não usaremos neste modelo
describe('Login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'William@gmail.com'

    

    it('Deve exibir um com boas vindas se o e-mail for válido', async () => {//Testando se o que está na função login é um alert.
        await Login(mockEmail) //Espere o email
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockNavigate).toHaveBeenLastCalledWith('/1')
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}`)

    }); //Neste teste estou aguardando o email mockado, e esperando que setlogado seja true e lá da service login, além de passa um parametro id '/1' para que este teste funcione.

    it('Deve exibir um erro caso o e-mail seja inválido ', async () => {
        await Login('Email@invalido.com')
        expect(mockSetIsLoggedIn).not.toHaveBeenLastCalledWith()
        expect(mockAlert).toHaveBeenCalledWith('E-mail inválido')
        
    });

})

*/


