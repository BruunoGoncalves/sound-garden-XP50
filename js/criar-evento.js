/**
 * API URL
 * https://soundgarden-api.vercel.app/events
 */
const nomeEvento = document.querySelector('#nome').value;
const atracoesEvento = document.querySelector('#atracoes').value;
const descricaoEvento = document.querySelector('#descricao').value;
const dataEvento = document.querySelector('#data').value;
const lotacaoEvento = document.querySelector('#lotacao').value;

const btnEvento = document.querySelector('#btn-submit');
const urlApi = 'https://soundgarden-api.vercel.app/events';


async function criarEvento() {
  try {
    const response = await fetch(urlApi, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        name: nomeEvento,
        attractions: atracoesEvento,
        description: descricaoEvento,
        date: dataEvento,
        capacity: lotacaoEvento,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}