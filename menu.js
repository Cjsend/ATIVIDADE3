document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const closeButton = document.getElementById('close-button');
  const mainNav = document.getElementById('main-nav');
  const navUl = mainNav.querySelector('ul');
  const imagem1 = document.getElementById('image1');
  const imagem2 = document.getElementById('image2');


  const updateMenuDisplay = () => {
    if (window.innerWidth > 1024) {
      mainNav.style.display = 'flex';
      navUl.style.display = 'flex';
      imagem1.style.display = 'block';
      imagem2.style.display = 'none';
    } else {
      imagem1.style.display = 'none';
      imagem2.style.display = 'block';
      mainNav.style.display = 'none';
      navUl.style.display = 'flex';
    }
  };


  function trocafundo() {
    const fundo = document.body;
    if (window.innerWidth <= 480) {
      fundo.style.backgroundImage = "url('images/foda.webp')";
    } else {
      fundo.style.backgroundImage = "url('images/fundo222.webp')";
    }
  }

  menuButton.addEventListener('click', () => {
    if (window.innerWidth <= 1024) {
      mainNav.style.display = 'block';
      navUl.style.display = 'flex';
    }
  });

  closeButton.addEventListener('click', () => {
    if (window.innerWidth <= 1024) {
      mainNav.style.display = 'none';
    }
  });

  window.addEventListener('resize', updateMenuDisplay);
  window.addEventListener('resize', trocafundo);
  updateMenuDisplay();
  trocafundo();
});


function responsivo() {
  const paragrafo = document.getElementById("mensagem");
  const botao = document.getElementById("botao");
  if (window.innerWidth <= 480) {
    paragrafo.textContent = "Você está usando á versão mobile ;)";
    botao.style.backgroundColor = "yellow"; 
  } else {
    paragrafo.textContent = "Você está usando á versão desktop do site :)";
    botao.style.backgroundColor = "black";
  }
}
window.addEventListener("load", responsivo);
window.addEventListener("resize", responsivo);

// Exibe largura e altura da tela em tempo real
function larguraTela() {
  const info = document.getElementById('tela-info');
  if (info) {
    info.textContent = `Sua tela tem ${window.innerWidth} x ${window.innerHeight} pixels`;
  }
}
window.addEventListener('resize', larguraTela);
window.addEventListener('load', larguraTela);

