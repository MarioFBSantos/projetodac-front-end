const { element, browser } = require("protractor");
const { expect } = require('chai');
const { table } = require("console");
const { assert } = require('chai');

class cursoSE{

async cadastro() {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();
    browser.get('http://localhost:4200/cursos');
    browser.sleep(1000);
    element(by.xpath('/html/body/app-root/app-curso/div/div[3]/div/a')).click();
    browser.sleep(1000);

    element(by.id('selectAutor')).click();
    element(by.id('naoAssociar')).click();
    element(by.id('tituloInput')).sendKeys('Curso de teste automatizado');
    element(by.id('descricaoInput')).sendKeys('Curso de testes automatizados para testar sua aplicação');
    element(by.id('imagemInput')).sendKeys('https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png');
    element(by.id('datacriacaoInput')).sendKeys('20220607');
    element(by.id('salvarCurso')).click();
    browser.sleep(1000);
    assert.isOk("Teste cadastro curso passou");
  }

async editar(){
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();
    browser.get('http://localhost:4200/cursos');
    browser.sleep(1000);
    element(by.id('editarCurso')).click();
    browser.sleep(1000);
    element(by.id('salvarEditCurso')).click();
    browser.sleep(1000);

    element(by.id('tituloInput')).clear();
    element(by.id('tituloInput')).sendKeys('Titulo Curso de testes Editado');
    element(by.id('descricaoInput')).clear();
    element(by.id('descricaoInput')).sendKeys('Curso com conteudo nada generico com um nome nao generico e tudo nao generico que foi editado');
    element(by.id('imagemInput')).clear();
    element(by.id('imagemInput')).sendKeys('https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png');
    element(by.id('datacriacaoInput')).clear();
    element(by.id('datacriacaoInput')).sendKeys('20220606');
    element(by.id('salvarCurso')).click();
    browser.sleep(1000);

    assert.isOk("Teste edit curso passou");
}

async deletar(){
  browser.ignoreSynchronization = true;
  browser.driver.manage().window().setSize(1920, 980);
  browser.manage().window().maximize();
  browser.get('http://localhost:4200/cursos');
  browser.sleep(1000);
  element(by.id('deleteCurso')).click();
  browser.sleep(1000);
  element(by.id('confirmeExcluirCurso')).click();
  browser.sleep(1000);
  assert.isOk("Teste deletar curso passou");
}

async cadastroSite() {
  browser.ignoreSynchronization = true;
  browser.driver.manage().window().setSize(1920, 980);
  browser.manage().window().maximize();
  browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/cursos');
  browser.sleep(1000);
  element(by.xpath('/html/body/app-root/app-curso/div/div[3]/div/a')).click();
  browser.sleep(1000);
  element(by.id('selectAutor')).click();
  element(by.xpath('/html/body/app-root/app-curso-add/div/div[2]/div/form/div[1]/select/option[1]')).click();
  element(by.id('tituloInput')).sendKeys('Curso de teste automatizado');
  element(by.id('descricaoInput')).sendKeys('Curso de testes automatizados para testar sua aplicação');
  element(by.id('imagemInput')).sendKeys('https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png');
  element(by.id('datacriacaoInput')).sendKeys('20220607');
  element(by.xpath('/html/body/app-root/app-curso-add/div/div[2]/div/form/div[6]/button[2]')).click();
  browser.sleep(1000);
  assert.isOk("Teste cadastro curso passou");
}

async editarSite(){
  browser.ignoreSynchronization = true;
  browser.driver.manage().window().setSize(1920, 980);
  browser.manage().window().maximize();
  browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/cursos');
  browser.sleep(1000);
  element(by.xpath('/html/body/app-root/app-curso/div/div[2]/div/table/tbody[1]/tr/td[5]/button')).click();
  browser.sleep(1000);
  element(by.xpath('/html/body/app-root/app-curso-view/div/div[2]/div/form/div[5]/button')).click();
  browser.sleep(1000);

  element(by.id('tituloInput')).clear();
  element(by.id('tituloInput')).sendKeys('Titulo Curso de testes Editado');
  element(by.id('descricaoInput')).clear();
  element(by.id('descricaoInput')).sendKeys('Curso com conteudo nada generico com um nome nao generico e tudo nao generico que foi editado');
  element(by.id('imagemInput')).clear();
  element(by.id('imagemInput')).sendKeys('https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png');
  element(by.id('datacriacaoInput')).clear();
  element(by.id('datacriacaoInput')).sendKeys('20220606');
  element(by.xpath('/html/body/app-root/app-curso-add/div/div[2]/div/form/div[6]/button[2]')).click();
  browser.sleep(1000);

  assert.isOk("Teste edit curso passou");
}

async deletarSite(){
browser.ignoreSynchronization = true;
browser.driver.manage().window().setSize(1920, 980);
browser.manage().window().maximize();
browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/cursos');
browser.sleep(1000);
element(by.xpath('/html/body/app-root/app-curso/div/div[2]/div/table/tbody[1]/tr/td[6]/button')).click();
browser.sleep(1000);
element(by.xpath('/html/body/app-root/app-curso/div/div[4]/div/div/div[3]/button[2]')).click();
browser.sleep(1000);
assert.isOk("Teste delete curso passou");
}
}

module.exports = new cursoSE();
