const conta = {
    email: 'Bank@gmail.com',
    password: '12345',
    name: 'Bank ADM',
    balance: 2000.00,
    id: '1'
};

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000);
    
})