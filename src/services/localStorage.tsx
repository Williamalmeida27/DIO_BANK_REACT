interface IDIoBank {
    login: boolean;
    usuario: string,
    senha: string
}

const dioBank = {
    login: false,
    usuario: '',
    senha: ''
}

export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}