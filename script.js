const mainContent = document.getElementById('main-content');
const menuItems = document.querySelectorAll('.sidebar nav ul li');

// Conteúdos de cada página
const pages = {
  "ia-agent": `
    <h2>IA Agent</h2>
    <p>Bem-vindo ao painel da IA Agent.</p>
  `,
  "chamados": `
    <h2>Chamados</h2>
    <section class="chamado-box">
      <div class="chamado-header">
        <span class="back">←</span>
        <div>
          <h3>Chamado #1234 <span class="status blue">TI</span></h3>
          <p class="problema">Problema na internet</p>
          <p class="descricao">
            A internet do departamento de TI não está funcionando corretamente. Favor olhar.
          </p>
        </div>
      </div>
      <div class="chamado-info">
        <p><strong>Nome do emissor:</strong><br>Ronieli Camargo</p>
        <p><strong>Data de abertura:</strong><br>13/09/2025</p>
      </div>
      <div class="chamado-actions">
        <button class="btn-green">Aceitar chamado</button>
      </div>
    </section>
  `,
  "configuracoes": `
    <h2>Configurações</h2>
    <p>Aqui você pode alterar as configurações do sistema.</p>
  `
};

// Função para carregar a página
function loadPage(page) {
  mainContent.innerHTML = pages[page];

  // Atualizar item ativo do menu
  menuItems.forEach(item => {
    item.classList.toggle('active', item.dataset.page === page);
  });
}

// Inicializa com a primeira página
loadPage('ia-agent');

// Adiciona evento de clique nos itens do menu
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    loadPage(item.dataset.page);
  });
});
