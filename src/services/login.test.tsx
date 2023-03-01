import { Login } from "./login";


describe('Login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'William@gmail.com'


    it('Deve exibir um com boas vindas se o e-mail for válido', async () => {//Testando se o que está na função login é um alert.
        await Login(mockEmail) //Espere o email
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}`)

    });

    it('Deve exibir uma mensagem de boas vindas sem o e-mail ', async () => {//Mesmo teste, porém validando se o que tem dnetro é um bem vindo!
        await Login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo') //Neste teste ele não deve passa.

    });

    it('Deve exibir um erro caso o e-mail seja inválido ', async () => {
        await Login('Email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('E-mail inválido')
        
    });

})