const Homepage = require("../pageobjects/home.page")

describe('acesses admin panel', () => {
    it('Fazer Login credenciais válidas', async () => {

        await Homepage.goToLogin()

        setTimeout(()=>{
            console.log('abriu')
        }, 10000)
    });
});