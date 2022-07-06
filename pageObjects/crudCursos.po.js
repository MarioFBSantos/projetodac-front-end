const { element, browser } = require("protractor");
class cursoSE{

async cadastro() {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();
    browser.get('http://localhost:4200/cursos');
    browser.sleep(1000);
    element(by.id('cadastraCurso')).click();
    browser.sleep(1000);
    element(by.id('selectAutor')).click();
    element(by.id('naoAssociar')).click();
    element(by.id('tituloInput')).sendKeys('Titulo Curso');
    element(by.id('descricaoInput')).sendKeys('Curso com conteudo nada generico com um nome nao generico e tudo nao generico');
    element(by.id('imagemInput')).sendKeys('https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png');
    element(by.id('datacriacaoInput')).sendKeys('20220607');
    element(by.id('salvarCurso')).click();
    browser.sleep(1000);
  }

async editar(){
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();
    browser.get('http://localhost:4200/cursos');
    browser.sleep(1000);
    element(by.id('editarCurso')).click();
    browser.sleep(1000);
    element(by.id('tituloInput')).sendKeys('Titulo Curso Editado');
    element(by.id('descricaoInput')).sendKeys('Curso com conteudo nada generico com um nome nao generico e tudo nao generico que foi editado');
    element(by.id('imagemInput')).sendKeys('https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png');
    element(by.id('datacriacaoInput')).sendKeys('20220606');
    element(by.id('salvarEditCurso')).click();
    browser.sleep(1000);
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
}


}

module.exports = new cursoSE();
