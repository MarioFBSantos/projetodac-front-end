const { browser } = require("protractor");

var autorSE = require('../pageObjects/crudAutor.po.js');


const { expect } = require('chai');

describe('CRUD AUTOR:', function() {

beforeAll( function() {
  autorSE.cadastro();
  autorSE.editar();
  autorSE.deletar();
  autorSE.cadastroSite();
  autorSE.editarSite();
  autorSE.deletarSite();
 });

 // ------------ crud autor -------------------------------
 it('Realizar cadastro do autor', async function(){
  await autorSE.cadastro();
  })
  it('Realizar edição do autor', async function(){
    await autorSE.editar();
  })
  it('Realizar deleção do autor', async function(){
    await autorSE.deletar();
  })
  it('Realizar cadastro do autor', async function(){
    await autorSE.cadastroSite();
  })
  it('Realizar edição do autor', async function(){
    await autorSE.editarSite();
  })
  it('Realizar deleção do autor', async function(){
    await autorSE.deletarSite();
  })
// ----------------------------------------------------------

afterAll(function(){ browser.close(); })
});
