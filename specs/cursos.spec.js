const { browser } = require("protractor");

var cursoSE = require('../pageObjects/crudCursos.po.js');

const { expect } = require('chai');

describe('CRUD CURSOS:', function() {

beforeAll( function() {

  cursoSE.cadastro();
  cursoSE.editar();
  cursoSE.deletar();
  cursoSE.cadastroSite();
  cursoSE.editarSite();
  cursoSE.deletarSite();

 });
// ------------ crud curso -------------------------------
it('Realizar cadastro do curso', async function(){
  await cursoSE.cadastro();
  })
it('Realizar edição do curso', async function(){
  await cursoSE.editar();
})
it('Realizar deleção do curso', async function(){
  await cursoSE.deletar();
})
it('Realizar cadastro do curso', async function(){
  await cursoSE.cadastroSite();
  })
it('Realizar edição do curso', async function(){
  await cursoSE.editarSite();
})
it('Realizar deleção do curso', async function(){
  await cursoSE.deletarSite();
})
 // ----------------------------------------------------------

// it('Realizar Login com dados válidos', async function(){
// await loginPage.etEmail.clear();
// await loginPage.etSenha.clear();
// await loginPage.login('novoemailteste@gmail.com', 'teste123');
// expect(await myAccountPage.getTextoMyAccount()).to.be.eq("MY ACCOUNT");
// })

afterAll(function(){ browser.close(); })
});
