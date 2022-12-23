function State() {
  this.listSection = null;
}

const state = new State();

export function init() {
  state.listSection = document.querySelector("#list-section");
}

export function addCard(address) {
  const card = createCard(address);
  state.listSection.appendChild(card);
}

function createCard(address) {
  const div = document.createElement("div");
  div.classList.add("card-list-item");

  const h3 = document.createElement("h3");
  h3.innerHTML = address.city;

  const line = document.createElement("p");
  line.innerHTML = `${address.street}, nº ${address.number}`;

  const cep = document.createElement("p");
  const span = document.createElement("span");
  span.innerHTML = address.cep;
  cep.appendChild(span);

  div.appendChild(h3);
  div.appendChild(line);
  div.appendChild(cep);

  return div;
}
