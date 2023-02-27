import { Login } from "./login";


describe('Login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert


    it('Deve exibir um alert de login', () => {//Testando se o que está na função login é um alert.
        Login()
        expect(mockAlert).toBeCalled()
                
    });

    it('Deve exibir um alert de login ', () => {//Mesmo teste, porém validando se o que tem dnetro é um bem vindo!
        Login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo') //Neste teste ele não deve passa.
        
    });

})