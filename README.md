# 🚀 NIKE PREMIUM SITE - GUIA DE USO

## 📦 Arquivos Necessários

Para rodar o site, você precisa de:

```
├── nike-site-v2.html      (Arquivo principal HTML)
├── style.css              (Estilos CSS)
├── script.js              (JavaScript com interatividade)
├── img1.webp até img10.webp (Imagens dos tênis)
├── logonike.webp          (Logo Nike Swoosh)
├── jordan.webp            (Logo Jordan Jumpman)
└── png.webp               (Logo Nike completa)
```

**IMPORTANTE:** Todos os arquivos devem estar na **mesma pasta**!

---

## 🎯 Como Usar

### 1️⃣ **Opção: Abrir Localmente**
- Renomeie `nike-site-v2.html` para `index.html`
- Coloque todos os arquivos na mesma pasta
- Clique duplo no `index.html` para abrir no navegador

### 2️⃣ **Opção: Usar um Servidor Local**
Se não funcionar direto, use Python:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Depois abra: `http://localhost:8000`

### 3️⃣ **Opção: Usar Live Server (VS Code)**
- Instale a extensão "Live Server"
- Clique direito em `nike-site-v2.html`
- Selecione "Open with Live Server"

---

## 🎮 Funcionalidades Ativadas

### ✅ **Animações ao Scroll**
- Elementos aparecem com animação ao fazer scroll
- Efeito parallax no hero (rodinha do mouse)
- Produtos escalam suavemente ao entrar na tela

### ✅ **Efeito 3D no Mouse**
- Passe o mouse nos produtos
- Os cards fazem efeito de rotação 3D
- Mais inclinado quanto mais próximo da borda

### ✅ **Filtros de Produtos Funcionais**
- Clique em "Running", "Casual", "Basketball", "Court"
- Os produtos filtram em tempo real
- Animação suave ao mostrar/esconder

### ✅ **Menu Mobile Responsivo**
- Em celular, aparece hamburger (☰)
- Clique para expandir/colapsar menu
- Menu fecha ao selecionar um link

### ✅ **Sistema de Carrinho**
- Clique em "Comprar Agora"
- Número aparece no carrinho (canto superior direito)
- Notificação flutuante confirma adição
- Contador acumula os itens

### ✅ **Notificações Flutuantes**
- Mensagens aparecem ao comprar
- Newsletter confirmação
- Desaparecem automaticamente após 3 segundos

### ✅ **Scroll Progress Bar**
- Barra colorida no topo
- Mostra quanto da página você viu
- Gradiente verde neon + laranja

### ✅ **Navegação Suave**
- Clique em qualquer link do menu
- Página faz scroll suave até a seção
- Funciona também com seta do teclado (↑ ↓)

---

## 🎨 Personalizações Principais

### Cores (Editar em `style.css`)
```css
--accent-neon-green: #39FF14;      /* Verde neon */
--accent-orange: #FF6B35;           /* Laranja */
--accent-blue: #0083B0;             /* Azul Nike */
```

### Tipografia (Editar em `style.css`)
```css
--font-display: 'Arial', sans-serif;   /* Títulos */
--font-body: 'Segoe UI', sans-serif;   /* Texto */
```

### Adicionar Novo Produto
No HTML, procure por `<!-- PRODUTO 1 -->` e copie/cole a estrutura, alterando:
- Imagem: `<img src="novaimg.webp">`
- Nome: `<h3>Nike Nome</h3>`
- Categoria: `data-categoria="running"`
- Descrição e preços

---

## 🔧 Dicas de Desenvolvimento

### Ver Console
Abra **F12** → **Console** para ver mensagens de debug

### Desativar Animações
Se tiver problemas de performance, comente em `script.js`:
```javascript
// animarElementosNoScroll(); // Comentar esta linha
```

### Adicionar Mais Seções
O HTML está bem estruturado. Basta copiar seções e adaptar.

### Mudar a Logo
No HTML, procure por:
```html
<img src="logonike.webp" alt="Nike Logo" class="nike-logo">
```

Substitua `logonike.webp` por sua logo.

---

## 📱 Responsividade

O site funciona em:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (até 480px)

---

## ⚡ Performance

### Pontos Otimizados:
- ✅ CSS com variáveis reutilizáveis
- ✅ JavaScript com throttle no scroll
- ✅ Imagens WebP (formato leve)
- ✅ Lazy loading automático
- ✅ Transições suaves (GPU accelerated)

### Para Melhorar Mais:
- Comprimir imagens com TinyPNG
- Minificar CSS e JS em produção
- Usar CDN para hospedagem

---

## 🐛 Troubleshooting

### "Imagens não aparecem"
- ✅ Verifique se os nomes estão corretos
- ✅ Verifique se estão na mesma pasta
- ✅ Abra Console (F12) e procure por erros

### "Menu não funciona"
- ✅ Certifique-se que script.js está carregando
- ✅ Verifique console para erros (F12)

### "Animações muito lentas"
- ✅ Desative no navegador: Configurações → Performance
- ✅ Rode em navegador mais rápido (Chrome/Edge)

### "Filtros não funcionam"
- ✅ Abra F12 → Console
- ✅ Procure por erros JavaScript

---

## 📊 Browser Suportados

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

---

## 🎬 Próximas Melhorias Sugeridas

1. **Backend**: Criar carrinho real com PHP/Node.js
2. **Database**: Salvar produtos em banco de dados
3. **Checkout**: Sistema de pagamento (Stripe/PayPal)
4. **Análytics**: Rastrear clicks e vendas
5. **SEO**: Meta tags e schema.org
6. **PWA**: Funcionar offline como app

---

## 📞 Suporte

Se tiver dúvidas:
1. Abra o console (F12)
2. Verifique os erros
3. Procure pela seção relevante neste guia

---

## ✨ Créditos

**Site Desenvolvido**: Personalizado por Silvio  
**Framework**: HTML5 + CSS3 + Vanilla JavaScript  
**Design**: Nike Premium Theme  
**Efeitos**: 3D Perspective + Scroll Animations  

---

**Divirta-se com o site! 🚀🎉**