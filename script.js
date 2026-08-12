const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');
const btnPlay = document.getElementById('btnPlay');
const meuAudio = document.getElementById('meuAudio');

const img = new Image();
img.src = 'cena.jpg'; // Coloque a sua imagem aqui!

let particulas = [];
const tamanhoPixel = 8; // Tamanho do bloco (quanto menor, mais detalhado e mais pixels caem)
let animando = false;

img.onload = () => {
  // Ajusta o tamanho do canvas para o tamanho da imagem
  canvas.width = img.width;
  canvas.height = img.height;
  
  // Desenha a imagem original no início
  ctx.drawImage(img, 0, 0);
};

// Classe que representa cada "pixel/frame" cortado da cena
class PixelFrame {
  constructor(x, y, cor) {
    this.x = x;
    this.y = y;
    this.cor = cor; // Pega a cor exata daquele pedaço da imagem
    this.velocidadeY = Math.random() * 2 + 1; // Velocidade de queda aleatória
    this.gravidade = 0.1;
    this.atraso = Math.random() * 100; // Alguns pixels começam a cair depois
  }

  atualizar() {
    if (this.atraso > 0) {
      this.atraso--;
      return;
    }
    this.velocidadeY += this.gravidade;
    this.y += this.velocidadeY;
  }

  desenhar() {
    ctx.fillStyle = this.cor;
    ctx.fillRect(this.x, this.y, tamanhoPixel, tamanhoPixel);
  }
}

function fatiarImagem() {
  particulas = [];
  // Desenha a imagem no canvas temporariamente para ler as cores dos pixels
  ctx.drawImage(img, 0, 0);
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Percorre a imagem cortando em blocos
  for (let y = 0; y < canvas.height; y += tamanhoPixel) {
    for (let x = 0; x < canvas.width; x += tamanhoPixel) {
      // Pega a cor do pixel atual
      const index = (y * canvas.width + x) * 4;
      const r = imgData.data[index];
      const g = imgData.data[index + 1];
      const b = imgData.data[index + 2];
      const a = imgData.data[index + 3];

      if (a > 0) {
        const cor = `rgba(${r},${g},${b},${a})`;
        particulas.push(new PixelFrame(x, y, cor));
      }
    }
  }
}

function animar() {
  // Limpa o canvas a cada quadro
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Atualiza e desenha cada pedacinho da imagem
  particulas.forEach(pixel => {
    pixel.atualizar();
    pixel.desenhar();
  });

  if (animando) {
    requestAnimationFrame(animar);
  }
}

btnPlay.addEventListener('click', () => {
  // 1. Toca a música
  meuAudio.play();

  // 2. Fatia a imagem em milhares de pixels
  fatiarImagem();

  // 3. Começa a animação de queda
  animando = true;
  animar();
});