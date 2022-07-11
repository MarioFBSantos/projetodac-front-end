const { element, browser } = require("protractor");
const { expect } = require('chai');
const { assert } = require('chai');
class autorSE{
// get btnLogin() { return element(by.css('.btn-outline-secondary')) }

async cadastro() {
  let nomes = ['Mário', 'Rodrigo', 'Matheus', 'Winne'];
  let pickName = Math.floor(Math.random() * 3) + 0;
  let orcid = Math.floor(Math.random() * 9000000000000001) + 1000000000000000;
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();
    browser.get('http://localhost:4200/autores');
    browser.sleep(1000);
    element(by.id('cadastrar')).click();
    browser.sleep(1000);
    element(by.id('orcidInput')).sendKeys(orcid);
    element(by.id('nomeInput')).sendKeys(nomes[pickName]);
    element(by.id('sobrenomeInput')).sendKeys('Proctator');
    element(by.id('emailInput')).sendKeys('teste@selenium.com');
    element(by.id('afiliacaoInput')).sendKeys('UFF');
    element(by.id('salvarCadastro')).click();
    browser.sleep(1000);

    assert.isOk("Teste cadastro autor passou");
  }

async editar(){
  let nomes = ['Mário', 'Rodrigo', 'Matheus', 'Winne'];
  let pickName = Math.floor(Math.random() * 3) + 0;

    let orcid = Math.floor(Math.random() * 9000000000000001) + 1000000000000000;
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();
    browser.get('http://localhost:4200/autores');
    browser.sleep(1000);
    element(by.id('viewAutor')).click();
    browser.sleep(1000);
    element(by.id('editarAutor')).click();
    browser.sleep(1000);
    element(by.id('orcidInput')).clear();
    element(by.id('orcidInput')).sendKeys(orcid);
    element(by.id('nomeInput')).clear();
    element(by.id('nomeInput')).sendKeys(nomes[pickName]);
    element(by.id('sobrenomeInput')).clear();
    element(by.id('sobrenomeInput')).sendKeys('Heroku');
    element(by.id('emailInput')).clear();
    element(by.id('emailInput')).sendKeys('teste@seleniumProctator.com');
    element(by.id('afiliacaoInput')).clear();
    element(by.id('afiliacaoInput')).sendKeys('Universidade Federal do Estado Heroku');
    element(by.id('salvarCadastro')).click();
    browser.sleep(1000);

    assert.isOk("Teste edit autor passou");
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

  assert.isOk("Teste deletar autor passou");
}

async cadastroSite() {
  let nomes = ['Mário', 'Rodrigo', 'Matheus', 'Winne'];
  let pickName = Math.floor(Math.random() * 3) + 0;
  let orcid = Math.floor(Math.random() * 9000000000000001) + 1000000000000000;
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();
    browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/autores');
    browser.sleep(1000);
    element(by.xpath('/html/body/app-root/app-autor/div/div[3]/div/a')).click();
    browser.sleep(1000);
    element(by.id('orcidInput')).sendKeys(orcid);
    element(by.id('nomeInput')).sendKeys(nomes[pickName]);
    element(by.id('sobrenomeInput')).sendKeys('Proctator');
    element(by.id('emailInput')).sendKeys('teste@selenium.com');
    element(by.id('afiliacaoInput')).sendKeys('UFF');
    element(by.xpath('/html/body/app-root/app-autor-add/div/div[2]/div/form/div[6]/button[2]')).click();
    browser.sleep(1000);

    assert.isOk("Teste cadastro autor passou");
  }

async editarSite(){
  let nomes = ['Mário', 'Rodrigo', 'Matheus', 'Winne'];
  let pickName = Math.floor(Math.random() * 3) + 0;

    let orcid = Math.floor(Math.random() * 9000000000000001) + 1000000000000000;
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();
    browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/autores');
    browser.sleep(1000);
    element(by.xpath('/html/body/app-root/app-autor/div/div[2]/div/table/tbody[1]/tr/td[6]/button')).click();
    browser.sleep(1000);
    element(by.xpath('/html/body/app-root/app-autor-view/div/div[2]/div/form/div[6]/button')).click();
    browser.sleep(1000);
    element(by.id('orcidInput')).clear();
    element(by.id('orcidInput')).sendKeys(orcid);
    element(by.id('nomeInput')).clear();
    element(by.id('nomeInput')).sendKeys(nomes[pickName]);
    element(by.id('sobrenomeInput')).clear();
    element(by.id('sobrenomeInput')).sendKeys('Heroku');
    element(by.id('emailInput')).clear();
    element(by.id('emailInput')).sendKeys('teste@seleniumProctator.com');
    element(by.id('afiliacaoInput')).clear();
    element(by.id('afiliacaoInput')).sendKeys('Universidade Federal do Estado Heroku');
    element(by.xpath('/html/body/app-root/app-autor-view/div/div[2]/div/form/div[6]/button')).click();
    browser.sleep(1000);

    assert.isOk("Teste edit autor passou");
}

async deletarSite(){
  browser.ignoreSynchronization = true;
  browser.driver.manage().window().setSize(1920, 980);
  browser.manage().window().maximize();
  browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/autores');
  browser.sleep(1000);
  element(by.xpath('/html/body/app-root/app-autor/div/div[2]/div/table/tbody[1]/tr/td[7]/button')).click();
  browser.sleep(1000);
  element(by.xpathid('/html/body/app-root/app-autor/div/div[4]/div/div/div[3]/button[2]')).click();
  browser.sleep(1000);

  assert.isOk("Teste deletar autor passou");
}
}

module.exports = new autorSE();
