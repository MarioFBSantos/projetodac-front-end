const { assert } = require("console");
const { element, browser } = require("protractor");
class recursoSE{

async cadastro() {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();
    browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/recursos');
    browser.sleep(1000);
    element(by.xpath("/html/body/app-root/app-recurso/div/div[3]/div/a")).click();
    browser.sleep(1000);

    element(by.id('selectAutor')).click();
    element(by.xpath('/html/body/app-root/app-recurso-add/div/div[2]/div/form/div[1]/select/option[1]')).click();
    element(by.id('tituloInput')).sendKeys('Tito de um recurso de teste do selenium em angular');
    element(by.id('descricaoInput')).sendKeys('Recurso de teste do selenium em angular');
    element(by.id('linkInput')).sendKeys('https://recursoTeste.com');
    element(by.id('imagemInput')).sendKeys('https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png');
    element(by.id('datacriacaoInput')).sendKeys('20220101');
    element(by.id('dataregistroInput')).sendKeys('20220623');
    element(by.id('palavrasChaveInput')).sendKeys('teste');

    element(by.id('button-addon2')).click();

    element(by.id('palavrasChaveInput')).sendKeys('selenium');

    element(by.id('button-addon2')).click();

    element(by.xpath('/html/body/app-root/app-recurso-add/div/div[2]/div/form/div[10]/button[2]')).click();
    browser.sleep(1000);
  }

async editar(){
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();
    browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/recursos');
    browser.sleep(1000);
    element(by.xpath('/html/body/app-root/app-recurso/div/div[2]/div/table/tbody[1]/tr/td[8]/button')).click();
    browser.sleep(1000);
    element(by.xpath('/html/body/app-root/app-recurso-view/div/div[2]/div/form/div[8]/button')).click();
    browser.sleep(1000);

    element(by.id('selectAutor')).click();
    element(by.xpath('/html/body/app-root/app-recurso-add/div/div[2]/div/form/div[1]/select/option[2]')).click();
    element(by.id('selectAutor')).click();
    element(by.xpath('/html/body/app-root/app-recurso-add/div/div[2]/div/form/div[2]/select/option[1]')).click();

    element(by.id('tituloInput')).clear();
    element(by.id('tituloInput')).sendKeys('Titulo Recurso Editado');


    element(by.id('descricaoInput')).clear();
    element(by.id('descricaoInput')).sendKeys('Recurso com conteudo nada generico com um nome nao generico e tudo nao generico que foi editado');

    element(by.id('linkInput')).clear();
    element(by.id('linkInput')).sendKeys('https://recursoEditado.com');

    element(by.id('imagemInput')).clear();
    element(by.id('imagemInput')).sendKeys('https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png');

    element(by.id('datacriacaoInput')).clear();
    element(by.id('datacriacaoInput')).sendKeys('20220606');

    element(by.id('dataregistroInput')).clear();
    element(by.id('dataregistroInput')).sendKeys('20220626');

    element(by.id('palavrasChaveInput')).sendKeys('Teste');
    element(by.id('button-addon2')).click();
    element(by.id('palavrasChaveInput')).sendKeys('Editado');
    element(by.id('button-addon2')).click();
    element(by.id('palavrasChaveInput')).sendKeys('Selenium');
    element(by.id('button-addon2')).click();
    element(by.id('salvarRecurso')).click();
    browser.sleep(1000);
}

async deletar(){
  browser.ignoreSynchronization = true;
  browser.driver.manage().window().setSize(1920, 980);
  browser.manage().window().maximize();
  browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/recursos');
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
  browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/recursos');
  browser.sleep(1000);
  element(by.xpath("/html/body/app-root/app-recurso/div/div[3]/div/a")).click();
  browser.sleep(1000);

  element(by.id('selectAutor')).click();
  element(by.xpath('/html/body/app-root/app-recurso-add/div/div[2]/div/form/div[1]/select/option[1]')).click();
  element(by.id('tituloInput')).sendKeys('Tito de um recurso de teste do selenium em angular');
  element(by.id('descricaoInput')).sendKeys('Recurso de teste do selenium em angular');
  element(by.id('linkInput')).sendKeys('https://recursoTeste.com');
  element(by.id('imagemInput')).sendKeys('https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png');
  element(by.id('datacriacaoInput')).sendKeys('20220101');
  element(by.id('dataregistroInput')).sendKeys('20220623');
  element(by.id('palavrasChaveInput')).sendKeys('teste');

  element(by.id('button-addon2')).click();

  element(by.id('palavrasChaveInput')).sendKeys('selenium');

  element(by.id('button-addon2')).click();

  element(by.xpath('/html/body/app-root/app-recurso-add/div/div[2]/div/form/div[10]/button[2]')).click();
  browser.sleep(1000);
}

async editarSite(){
  browser.ignoreSynchronization = true;
  browser.driver.manage().window().setSize(1920, 980);
  browser.manage().window().maximize();
  browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/recursos');
  browser.sleep(1000);
  element(by.xpath('/html/body/app-root/app-recurso/div/div[2]/div/table/tbody[1]/tr/td[8]/button')).click();
  browser.sleep(1000);
  element(by.xpath('/html/body/app-root/app-recurso-view/div/div[2]/div/form/div[8]/button')).click();
  browser.sleep(1000);

  element(by.id('selectAutor')).click();
  element(by.xpath('/html/body/app-root/app-recurso-add/div/div[2]/div/form/div[1]/select/option[2]')).click();
  element(by.id('selectAutor')).click();
  element(by.xpath('/html/body/app-root/app-recurso-add/div/div[2]/div/form/div[2]/select/option[1]')).click();

  element(by.id('tituloInput')).clear();
  element(by.id('tituloInput')).sendKeys('Titulo Recurso Editado');


  element(by.id('descricaoInput')).clear();
  element(by.id('descricaoInput')).sendKeys('Recurso com conteudo nada generico com um nome nao generico e tudo nao generico que foi editado');

  element(by.id('linkInput')).clear();
  element(by.id('linkInput')).sendKeys('https://recursoEditado.com');

  element(by.id('imagemInput')).clear();
  element(by.id('imagemInput')).sendKeys('https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png');

  element(by.id('datacriacaoInput')).clear();
  element(by.id('datacriacaoInput')).sendKeys('20220606');

  element(by.id('dataregistroInput')).clear();
  element(by.id('dataregistroInput')).sendKeys('20220626');

  element(by.id('palavrasChaveInput')).sendKeys('Teste');
  element(by.id('button-addon2')).click();
  element(by.id('palavrasChaveInput')).sendKeys('Editado');
  element(by.id('button-addon2')).click();
  element(by.id('palavrasChaveInput')).sendKeys('Selenium');
  element(by.id('button-addon2')).click();
  element(by.xpath('/html/body/app-root/app-recurso-add/div/div[2]/div/form/div[10]/button[2]')).click();
  browser.sleep(1000);
}

async deletarSite(){
browser.ignoreSynchronization = true;
browser.driver.manage().window().setSize(1920, 980);
browser.manage().window().maximize();
browser.get('https://rodrigoscarvalho.github.io/projetodac-front-end/recursos');
browser.sleep(1000);
element(by.id('deleteEventos')).click();
browser.sleep(1000);
element(by.id('confirmeExcluirEventos')).click();
browser.sleep(1000);
}
}

module.exports = new recursoSE();
