const { browser } = require("protractor");

var recursosSE = require('../pageObjects/crudRecursos.po.js');

const { expect } = require('chai');

describe('CRUD RECURSOS:', function() {

beforeAll( function() {

  recursosSE.cadastro();
  recursosSE.editar();
  recursosSE.deletar();
  recursosSE.cadastroSite();
  recursosSE.editarSite();
  recursosSE.deletarSite();

 });

 // ------------ crud recurso -------------------------------
 it('Realizar cadastro do recurso', async function(){
  await recursosSE.cadastro();
  })
it('Realizar edição do recurso', async function(){
  await recursosSE.editar();
})
it('Realizar deleção do recurso', async function(){
  await recursosSE.deletar();
})
it('Realizar cadastro do recurso', async function(){
  await recursosSE.cadastroSite();
  })
it('Realizar edição do recurso', async function(){
  await recursosSE.editarSite();
})
it('Realizar deleção do recurso', async function(){
  await recursosSE.deletarSite();
})
 // ----------------------------------------------------------

afterAll(function(){ browser.close(); })
});
