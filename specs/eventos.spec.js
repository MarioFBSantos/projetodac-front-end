const { browser } = require("protractor");

var eventosSE = require('../pageObjects/crudEventos.po.js');

const { expect } = require('chai');

describe('CRUD CURSOS:', function() {

beforeAll( function() {
  eventosSE.cadastro();
  eventosSE.editar();
  eventosSE.deletar();
  eventosSE.cadastroSite();
  eventosSE.editarSite();
  eventosSE.deletarSite();

 });


// ------------ crud evento -------------------------------
it('Realizar cadastro do evento', async function(){
  await eventosSE.cadastro();
  })
it('Realizar edição do evento', async function(){
  await eventosSE.editar();
})
it('Realizar deleção do evento', async function(){
  await eventosSE.deletar();
})
it('Realizar cadastro do evento', async function(){
  await eventosSE.cadastroSite();
  })
it('Realizar edição do evento', async function(){
  await eventosSE.editarSite();
})
it('Realizar deleção do evento', async function(){
  await eventosSE.deletarSite();
})
 // ----------------------------------------------------------



// it('Realizar deleção do autor', async function(){
//   await autorSE.deletar();
// })

// it('Realizar Login com dados válidos', async function(){
// await loginPage.etEmail.clear();
// await loginPage.etSenha.clear();
// await loginPage.login('novoemailteste@gmail.com', 'teste123');
// expect(await myAccountPage.getTextoMyAccount()).to.be.eq("MY ACCOUNT");
// })

afterAll(function(){ browser.close(); })
});
