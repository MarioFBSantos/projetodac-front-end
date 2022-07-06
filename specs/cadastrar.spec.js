const { browser } = require("protractor");

var autorSE = require('../pageObjects/cadastraAutor.po.js');
// var loginPage = require('../pageObjects/loginPage.po.js');
// var myAccountPage = require('../pageObjects/myAccountPage.po.js');
const { expect } = require('chai');

describe('CRUD AUTOR:', function() {

beforeAll( function() {
  autorSE.cadastro();
  autorSE.editar();
  autorSE.deletar();
 });

it('Realizar cadastro do autor', async function(){
await autorSE.cadastro();
})
it('Realizar edição do autor', async function(){
  await autorSE.editar();
})
it('Realizar deleção do autor', async function(){
  await autorSE.deletar();
})

// it('Realizar Login com dados válidos', async function(){
// await loginPage.etEmail.clear();
// await loginPage.etSenha.clear();
// await loginPage.login('novoemailteste@gmail.com', 'teste123');
// expect(await myAccountPage.getTextoMyAccount()).to.be.eq("MY ACCOUNT");
// })

afterAll(function(){ browser.close(); })
});
