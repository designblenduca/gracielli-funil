import React from 'react';

const resultData = {
  A: {
    perfil: "Liderança Diretiva",
    forca: "Você foca intensamente nos resultados, define metas claras e mobiliza a equipe para a execução rápida.",
    risco: "Pode ser percebido como muito rígido e pouco aberto a escutar as necessidades e ideias da equipe.",
    desenvolvimento: "Precisa desenvolver a escuta ativa e criar um ambiente onde as pessoas se sintam seguras para inovar e errar.",
    passo: "Na próxima reunião, ouça ativamente a equipe antes de impor sua solução. Pergunte: 'Como vocês resolveriam isso?'"
  },
  B: {
    perfil: "Liderança Acolhedora",
    forca: "Você cria segurança, vínculo e confiança. Sua equipe se sente bem e engajada com você.",
    risco: "Pode transformar compreensão em permissividade, tendo dificuldade em dar feedbacks duros.",
    desenvolvimento: "Mais clareza para fazer combinados e conduzir conversas difíceis quando os resultados não são atingidos.",
    passo: "Observe uma conversa que está adiando e identifique o que precisa ser dito com clareza."
  },
  C: {
    perfil: "Liderança Evitativa",
    forca: "Você dá grande autonomia para a equipe e não pratica microgerenciamento.",
    risco: "Pode se distanciar demais e falhar em dar o direcionamento necessário nos momentos críticos.",
    desenvolvimento: "Precisa estar mais presente no dia a dia da equipe, definindo expectativas mais claras e acompanhando de perto os marcos principais.",
    passo: "Agende um alinhamento 1:1 nesta semana com um membro da equipe para revisar juntos as prioridades."
  },
  D: {
    perfil: "Liderança Centralizadora",
    forca: "Você garante alto padrão de qualidade e profundo conhecimento técnico sobre as entregas da sua área.",
    risco: "Pode se sobrecarregar facilmente e se tornar o gargalo da equipe, impedindo o crescimento dos outros.",
    desenvolvimento: "Aprender a delegar não apenas tarefas, mas também responsabilidades, aceitando que erros iniciais fazem parte do aprendizado da equipe.",
    passo: "Escolha uma tarefa operacional importante que você faz hoje e delegue-a completamente para alguém da equipe nesta semana."
  }
};

function Result({ profileCode }) {
  const data = resultData[profileCode] || resultData['B'];

  return (
    <div className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="result-header">
        <p>SEU PERFIL PREDOMINANTE É:</p>
        <h1 style={{ color: 'var(--color-accent)' }}>{data.perfil}</h1>
      </div>

      <div className="result-grid">
        <div className="result-item glass-panel">
          <div className="result-label">FORÇA</div>
          <div className="result-value">{data.forca}</div>
        </div>
        
        <div className="result-item glass-panel">
          <div className="result-label">RISCO</div>
          <div className="result-value">{data.risco}</div>
        </div>

        <div className="result-item glass-panel" style={{ borderColor: 'rgba(214, 176, 106, 0.3)' }}>
          <div className="result-label">O QUE FALTA DESENVOLVER</div>
          <div className="result-value">{data.desenvolvimento}</div>
        </div>

        <div className="result-item glass-panel">
          <div className="result-label">PRÓXIMO PASSO RECOMENDADO</div>
          <div className="result-value">{data.passo}</div>
        </div>
      </div>

      <div className="result-actions">
        <button 
          id="btn-whatsapp-gracielli"
          className="btn-primary" 
          onClick={() => window.open('https://wa.me/seunumerodeexemplo', '_blank')}
        >
          ENVIAR MENSAGEM PARA GRACIELLI NO WHATSAPP
        </button>
        <button id="btn-comunidade-lider" className="btn-secondary">
          CONHECER A COMUNIDADE LÍDER NA PRÁTICA
        </button>
      </div>
    </div>
  );
}

export default Result;
