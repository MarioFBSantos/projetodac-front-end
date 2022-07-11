const { browser } = require("protractor");

var autorSE = require('../pageObjects/crudAutor.po.js');
var cursoSE = require('../pageObjects/crudCursos.po.js');
var eventosSE = require('../pageObjects/crudEventos.po.js');
// var recursosSE = require('../pageObjects/crudRecursos.po.js');

const { expect } = require('chai');

describe('CRUD TOTAL:', function() {

beforeAll( function() {

  autorSE.cadastro();
  autorSE.editar();
  autorSE.deletar();
  autorSE.cadastroSite();
  autorSE.editarSite();
  autorSE.deletarSite();

  cursoSE.cadastro();
  cursoSE.editar();
  cursoSE.deletar();
  cursoSE.cadastroSite();
  cursoSE.editarSite();
  cursoSE.deletarSite();

  eventosSE.cadastro();
  eventosSE.editar();
  eventosSE.deletar();
  eventosSE.cadastroSite();
  eventosSE.editarSite();
  eventosSE.deletarSite();

  recursosSE.cadastro();
  recursosSE.editar();
  recursosSE.deletar();
  recursosSE.cadastroSite();
  recursosSE.editarSite();
  recursosSE.deletarSite();

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
