import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./localStorage";


const dioBank = {
    login: false,
    usuario: '',
    senha: ''
}


describe('Storage', () => {

    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')    

    it('Deve retorna o objeto do local storage ', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem') //Aqui estou mocando um resultado, fazendo um spyon, euq uero verificar se o estorage foi chamado e se o prototype
    //Dele foi chamado, e se foi verificar se a função getItem foi chamado.
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalled()
    });

    it('Deve criar um objeto no local estorage ', () => {        
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
        
    });

    it('Deve atualizar o objeto do local storage ', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
        
    });
})