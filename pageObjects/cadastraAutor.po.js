const { element, browser } = require("protractor");
class autorSE{
// get btnLogin() { return element(by.css('.btn-outline-secondary')) }

async cadastro() {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();
    browser.get('http://localhost:4200/autores');
    browser.sleep(1000);
    element(by.id('cadastrar')).click();
    browser.sleep(1000);
    element(by.id('orcidInput')).sendKeys('0000000000000002');
    element(by.id('nomeInput')).sendKeys('Selenium');
    element(by.id('sobrenomeInput')).sendKeys('Proctator');
    element(by.id('emailInput')).sendKeys('teste@selenium.com');
    element(by.id('afiliacaoInput')).sendKeys('UFF');
    element(by.id('salvarCadastro')).click();
    browser.sleep(1000);
  }

async editar(){
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();
    browser.get('http://localhost:4200/autores');
    browser.sleep(1000);
    element(by.id('viewAutor')).click();
    browser.sleep(1000);
    element(by.id('orcidInput')).sendKeys('0000000000000002');
    element(by.id('nomeInput')).sendKeys('Teste selenium');
    element(by.id('sobrenomeInput')).sendKeys('Heroku');
    element(by.id('emailInput')).sendKeys('teste@seleniumAndHeroku.com');
    element(by.id('afiliacaoInput')).sendKeys('Universidade Federal do Estado Heroku');
    element(by.id('editarAutor')).click();
    browser.sleep(1000);
}

async deletar(){
  browser.ignoreSynchronization = true;
  browser.driver.manage().window().setSize(1920, 980);
  browser.manage().window().maximize();
  browser.get('http://localhost:4200/autores');
  browser.sleep(1000);
  element(by.id('deleteAutor')).click();
  browser.sleep(1000);
  element(by.id('confirmDelete')).click();
  browser.sleep(1000);
}


}

module.exports = new autorSE();
