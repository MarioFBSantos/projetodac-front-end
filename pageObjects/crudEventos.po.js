const { element, browser } = require("protractor");
const { assert } = require('chai');
class eventosSE{

async cadastro() {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();
    browser.get('http://localhost:4200/eventos');
    browser.sleep(1000);
    element(by.id('cadastrarEvento')).click();
    browser.sleep(1000);
    element(by.id('tituloInput')).sendKeys('Titulo Evento teste selenium');
    element(by.id('descricaoInput')).sendKeys('Evento de teste do selenium em angular');
    element(by.id('imagemInput')).sendKeys('https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png');
    element(by.id('datacriacaoInput')).sendKeys('20220607');
    element(by.id('dataregistroInput')).sendKeys('20220623');
    element(by.id('salvarCurso')).click();
    browser.sleep(1000);
  }

async editar(){
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();
    browser.get('http://localhost:4200/eventos');
    browser.sleep(1000);
    element(by.id('editarEventos')).click();
    browser.sleep(1000);
    element(by.id('tituloInput')).sendKeys('Titulo Evento Editado');
    element(by.id('descricaoInput')).sendKeys('Evento com conteudo nada generico com um nome nao generico e tudo nao generico que foi editado');
    element(by.id('imagemInput')).sendKeys('https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png');
    element(by.id('datacriacaoInput')).sendKeys('20220606');
    element(by.id('dataregistroInput')).sendKeys('20220626');
    element(by.id('salvarEditEvento')).click();
    browser.sleep(1000);
}

async deletar(){
  browser.ignoreSynchronization = true;
  browser.driver.manage().window().setSize(1920, 980);
  browser.manage().window().maximize();
  browser.get('http://localhost:4200/eventos');
  browser.sleep(1000);
  element(by.id('deleteEventos')).click();
  browser.sleep(1000);
  element(by.id('confirmeExcluirEventos')).click();
  browser.sleep(1000);
}

async cadastroSite() {
  browser.ignoreSynchronization = true;
  browser.driver.manage().window().setSize(1920, 980);
  browser.manage().window().maximize();
  browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/eventos');
  browser.sleep(1000);
  element(by.xpath('/html/body/app-root/app-evento/div/div[3]/div/a')).click();
  browser.sleep(1000);
  element(by.id('tituloInput')).sendKeys('Titulo Evento teste selenium');
  element(by.id('descricaoInput')).sendKeys('Evento de teste do selenium em angular');
  element(by.id('imagemInput')).sendKeys('https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png');
  element(by.id('datacriacaoInput')).sendKeys('20220607');
  element(by.id('dataregistroInput')).sendKeys('20220623');
  element(by.id('salvarCurso')).click();
  browser.sleep(1000);
  assert.isOk("Teste cadastro eventos passou");
}

async editarSite(){
  browser.ignoreSynchronization = true;
  browser.driver.manage().window().setSize(1920, 980);
  browser.manage().window().maximize();
  browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/eventos');
  browser.sleep(1000);
  element(by.xpath('/html/body/app-root/app-evento/div/div[2]/div/table/tbody[1]/tr/td[6]/button')).click();
  browser.sleep(1000);
  element(by.xpath('/html/body/app-root/app-evento-view/div/div[2]/div/form/div[6]/button')).click();
  element(by.id('tituloInput')).clear();
  element(by.id('tituloInput')).sendKeys('Titulo Evento Editado');
  element(by.id('descricaoInput')).clear();
  element(by.id('descricaoInput')).sendKeys('Evento com conteudo nada generico com um nome nao generico e tudo nao generico que foi editado');
  element(by.id('imagemInput')).clear();
  element(by.id('imagemInput')).sendKeys('https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png');
  element(by.id('datacriacaoInput')).clear();
  element(by.id('datacriacaoInput')).sendKeys('20220606');
  element(by.id('dataregistroInput')).clear();
  element(by.id('dataregistroInput')).sendKeys('20220626');
  element(by.xpath('/html/body/app-root/app-evento-add/div/div[2]/div/form/div[7]/button[2]')).click();
  browser.sleep(1000);
  assert.isOk("Teste cadastro eventos passou");
}

async deletarSite(){
browser.ignoreSynchronization = true;
browser.driver.manage().window().setSize(1920, 980);
browser.manage().window().maximize();
browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/eventos');
browser.sleep(1000);
element(by.xpath('/html/body/app-root/app-evento/div/div[2]/div/table/tbody[1]/tr/td[7]/button')).click();
browser.sleep(1000);
element(by.xpath('/html/body/app-root/app-evento/div/div[4]/div/div/div[3]/button[2]')).click();
browser.sleep(1000);
assert.isOk("Teste cadastro eventos passou");
}
}

module.exports = new eventosSE();
