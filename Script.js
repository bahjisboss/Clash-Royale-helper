let elixir = 5;
let elixirInterval;

function adjustElixir(amount) {
  elixir = Math.max(0, Math.min(10, elixir + amount));
  document.getElementById("elixir-count").innerText = elixir;
}

function startElixirTimer() {
  elixirInterval = setInterval(() => {
    if (elixir < 10) {
      adjustElixir(1);
    }
  }, 2800);
}

let cycle = [];

function autoCycle() {
  if (cycle.length === 4) {
    cycle.push(cycle.shift());
    updateCycleDisplay();
  }
}

function updateCycleDisplay() {
  cycle.forEach((card, i) => {
    document.getElementById("slot" + (i + 1)).innerText = card;
  });
}

function addCard(cardName) {
  if (cycle.length < 4) {
    cycle.push(cardName);
    updateCycleDisplay();
  }
}

function loadCards() {
  const container = document.getElementById("cards-container");
  for (let i = 1; i <= 109; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = "Card " + i;
    card.onclick = () => addCard("Card " + i);
    container.appendChild(card);
  }
}

window.onload = () => {
  loadCards();
  startElixirTimer();
};
