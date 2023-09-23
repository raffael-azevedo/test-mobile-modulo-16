const homepage = require("../pageobjets/home.page")

describe('Primeiro teste', () => {
  it('acessar o menu forms', async () => {
    await $('~forms').click()
    await $('~text-input').setValue('teste')
    expect(await $('~text-input')).toBeDisplayed()
  });
});