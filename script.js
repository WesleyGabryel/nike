/* ========================================
   NIKE PREMIUM SITE - JAVASCRIPT
   Scroll Animations | 3D Effects | Interatividade
   ======================================== */

// ========== VARIÁVEIS GLOBAIS ==========
let mouseX = 0;
let mouseY = 0;
let scrollY = 0;

// ========== SCROLL EVENT - PARALLAX E ANIMAÇÕES ==========
window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
    
    // Parallax no Hero
    const hero = document.querySelector('.hero-background');
    if (hero) {
        hero.style.transform = `translateY(${scrollY * 0.5}px)`;
    }

    // Animações ao fazer scroll
    animarElementosNoScroll();
    
    // Atualizar posição do scroll
    atualizarScrollProgress();
});

// ========== MOUSE MOVE - EFEITO 3D NOS PRODUTOS ==========
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Efeito 3D nos cards de produtos
    const produtoCards = document.querySelectorAll('.produto-card');
    produtoCards.forEach((card) => {
        efeito3DNoCard(card, e);
    });

    // Efeito 3D nos cards de brand
    const brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach((card) => {
        efeito3DNoCard(card, e);
    });
});

// Função para criar efeito 3D ao passar o mouse
function efeito3DNoCard(card, e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
}

// Reset do 3D ao sair do card
document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.produto-card, .brand-card');
    cards.forEach((card) => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// ========== ANIMAÇÕES AO SCROLL ==========
function animarElementosNoScroll() {
    const elementos = document.querySelectorAll('.produto-card, .categoria-card, .brand-card, .stat');

    elementos.forEach((element) => {
        const posicao = element.getBoundingClientRect().top;
        const altura = window.innerHeight;

        // Se o elemento entrou na tela
        if (posicao < altura * 0.75) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';
            element.classList.add('visivel');
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px) scale(0.95)';
        }
    });
}

// ========== FILTROS DE PRODUTOS ==========
const filtroButtons = document.querySelectorAll('.filtro-btn');
const produtoCards = document.querySelectorAll('.produto-card');

filtroButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const filtro = btn.dataset.filtro;

        // Remover classe ativa de todos os botões
        filtroButtons.forEach((b) => b.classList.remove('ativo'));
        // Adicionar classe ativa ao botão clicado
        btn.classList.add('ativo');

        // Animar produtos
        produtoCards.forEach((card) => {
            const categoria = card.dataset.categoria;

            if (filtro === 'todos' || categoria === filtro) {
                // Mostrar produto
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                // Esconder produto
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ========== MENU MOBILE HAMBURGER ==========
const criarMenuMobile = () => {
    const navbar = document.querySelector('.navbar-container');
    const navMenu = document.querySelector('.nav-menu');

    // Criar botão hamburger
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    // Inserir hamburger antes do carrinho
    navbar.insertBefore(hamburger, document.querySelector('.carrinho-icon'));

    // Evento de clique no hamburger
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('ativo');
        hamburger.classList.toggle('ativo');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('ativo');
            hamburger.classList.remove('ativo');
        });
    });
};

// ========== BOTÕES DE COMPRA ==========
const botoesComprar = document.querySelectorAll('.btn-comprar');
let carrinho = 0;

botoesComprar.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Aumentar contador do carrinho
        carrinho++;
        atualizarCarrinho();

        // Animação de feedback
        const card = btn.closest('.produto-card');
        const nomeProduto = card.querySelector('h3').textContent;

        // Criar notificação flutuante
        mostrarNotificacao(`✓ ${nomeProduto} adicionado ao carrinho!`);

        // Animar botão
        btn.textContent = '✓ Adicionado!';
        btn.style.background = 'linear-gradient(135deg, #39FF14, #2ec94f)';
        
        setTimeout(() => {
            btn.textContent = 'Comprar Agora';
            btn.style.background = 'linear-gradient(135deg, var(--primary-black), var(--dark-gray))';
        }, 1500);
    });
});

// Função para atualizar carrinho
function atualizarCarrinho() {
    const carrinoIcon = document.querySelector('.carrinho-icon');
    let badge = carrinoIcon.querySelector('.carrinho-badge');

    if (!badge) {
        badge = document.createElement('span');
        badge.className = 'carrinho-badge';
        carrinoIcon.appendChild(badge);
    }

    badge.textContent = carrinho;
    badge.style.display = 'flex';
    
    // Animar badge
    badge.style.animation = 'badgeBounce 0.4s ease-out';
}

// ========== NOTIFICAÇÃO FLUTUANTE ==========
function mostrarNotificacao(mensagem) {
    const notif = document.createElement('div');
    notif.className = 'notificacao';
    notif.textContent = mensagem;

    document.body.appendChild(notif);

    // Animação de entrada
    setTimeout(() => {
        notif.classList.add('ativo');
    }, 10);

    // Remover após 3 segundos
    setTimeout(() => {
        notif.classList.remove('ativo');
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// ========== SMOOTH SCROLL PARA LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// ========== NEWSLETTER FORM ==========
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input');
        const btn = newsletterForm.querySelector('button');

        // Validação básica
        if (input.value) {
            // Feedback visual
            btn.textContent = '✓ Inscrito!';
            btn.style.background = 'linear-gradient(135deg, #39FF14, #2ec94f)';

            mostrarNotificacao(`✓ Email ${input.value} inscrito com sucesso!`);

            // Limpar formulário
            input.value = '';

            // Voltar ao normal
            setTimeout(() => {
                btn.textContent = 'Inscrever';
                btn.style.background = 'linear-gradient(135deg, var(--accent-neon-green), var(--accent-orange))';
            }, 2000);
        }
    });
}

// ========== SCROLL PROGRESS BAR ==========
function atualizarScrollProgress() {
    const altura = document.documentElement.scrollHeight - window.innerHeight;
    const progresso = (scrollY / altura) * 100;

    // Criar ou atualizar progress bar
    let progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress-bar';
        document.body.appendChild(progressBar);
    }

    progressBar.style.width = progresso + '%';
}

// ========== LAZY LOADING DE IMAGENS ==========
const configurarLazyLoading = () => {
    const imagens = document.querySelectorAll('img');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '1';
                    observer.unobserve(img);
                }
            });
        });

        imagens.forEach((img) => {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            observer.observe(img);
        });
    }
};

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', () => {
    // Criar menu mobile
    criarMenuMobile();

    // Configurar lazy loading
    configurarLazyLoading();

    // Inicializar animações dos elementos
    animarElementosNoScroll();

    // Animar título do hero
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const texto = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.fontSize = '5.5rem';

        let index = 0;
        const animar = () => {
            if (index < texto.length) {
                heroTitle.textContent += texto[index];
                index++;
                setTimeout(animar, 50);
            }
        };
        // Comentado para não ficar muito lento
        // animar();
    }

    // Adicionar event listeners aos produtos
    produtoCards.forEach((card) => {
        card.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        card.style.opacity = '1';
    });

    console.log('🚀 Nike Premium Site Carregado com Sucesso!');
    console.log('✅ Animações ao scroll ativadas');
    console.log('✅ Efeitos 3D no mouse ativados');
    console.log('✅ Filtros funcionando');
});

// ========== DETECÇÃO DE SCROLL RÁPIDO ==========
let ultimoScroll = 0;
window.addEventListener('scroll', () => {
    const scrollAtual = window.scrollY;
    const velocidadeScroll = Math.abs(scrollAtual - ultimoScroll);

    // Se scroll rápido, animar efeito visual
    if (velocidadeScroll > 50) {
        document.body.style.opacity = '0.98';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }

    ultimoScroll = scrollAtual;
}, { passive: true });

// ========== TECLADO - NAVEGAÇÃO ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        window.scrollBy({ top: 100, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
        window.scrollBy({ top: -100, behavior: 'smooth' });
    }
});

// ========== DARK MODE (Opcional para futuro) ==========
const verificarDarkMode = () => {
    const prefere = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefere.matches) {
        document.body.classList.add('dark-mode');
    }
};

// ========== PERFORMANCE - THROTTLE SCROLL ==========
const throttle = (func, limit) => {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

window.addEventListener('scroll', throttle(() => {
    animarElementosNoScroll();
}, 100), { passive: true });