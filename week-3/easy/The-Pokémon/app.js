// Beginner-friendly Pokémon card app (fixed typos + clearer helpers)

const API_BASE = "https://pokeapi.co/api/v2";
const typeSelect = document.getElementById("typeSelect");
const countInput = document.getElementById("count");
const goBtn = document.getElementById("go");
const statusEl = document.getElementById("status");
const cardsEl = document.getElementById("cards");

// update the small status text shown to the user
function setStatus(text) {
  // update only if the status element exists (avoids errors when running this file in Node)
  if (typeof statusEl !== 'undefined' && statusEl) {
    statusEl.textContent = String(text || "");
  } else {
    // fall back to console for environments without DOM
    // (helps when someone accidentally runs this with node)
    // comment this out if you don't want console logs in browser
    // console.log('[status]', text);
  }
}

// fetch JSON and throw on network error
async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network / API error: " + res.status);
  return res.json();
}

// load pokemon types and populate the <select>
const loadTypes = async () => {
  setStatus("Loading types...");
  try {
    const json = await getJson(`${API_BASE}/type`);
    json.results.forEach((t) => {
      const opt = document.createElement("option");
      opt.value = t.name;
      opt.textContent = t.name;
      typeSelect.appendChild(opt);
    });
    setStatus('Choose a type and number, then click "Show cards".');
  } catch (err) {
    setStatus("Failed to load types — try refreshing.");
    console.error(err);
  }
};

// build a card element from pokemon detail data
const createCard = (p) => {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src =
    p.sprites.front_default ||
    p.sprites.other?.["official-artwork"]?.front_default ||
    "";
  img.alt = p.name || "";

  const id = document.createElement("div");
  id.className = "id";
  id.textContent = `#${p.id}`;

  const name = document.createElement("div");
  name.className = "name";
  name.textContent = p.name;

  const typesWrap = document.createElement("div");
  typesWrap.className = "types";
  (p.types || []).forEach((t) => {
    const span = document.createElement("span");
    span.className = "type";
    span.textContent = t.type.name;
    typesWrap.appendChild(span);
  });

  div.appendChild(img);
  div.appendChild(id);
  div.appendChild(name);
  div.appendChild(typesWrap);

  return div;
};

// pick up to n unique random items from array
const pickN = (array, n) => {
  const result = [];
  const copy = array.slice();
  while (result.length < n && copy.length) {
    const i = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(i, 1)[0]);
  }
  return result;
};

const showCards = async () => {
  cardsEl.innerHTML = "";
  setStatus("Preparing...");

  let count = parseInt(countInput.value, 10) || 0;
  if (count <= 0) {
    setStatus("Enter a positive number (1-20).");
    return;
  }
  if (count > 20) count = 20;

  const chosenType = typeSelect.value; // empty = any
  try {
    setStatus("Fetching pokemon list...");

    if (chosenType === "") {
      // any type -> pick random ids from 1..898
      const maxId = 898;
      const ids = Array.from({ length: maxId }, (_, i) => i + 1);
      const picked = pickN(ids, count);

      setStatus("Fetching details for each pokemon (this may take a moment)...");
      const promises = picked.map((id) => getJson(`${API_BASE}/pokemon/${id}`));
      const details = await Promise.all(promises);
      details.forEach((d) => cardsEl.appendChild(createCard(d)));
      setStatus("Done.");
      return;
    } else {
      // type chosen -> fetch list of pokemon for that type
      const typeJson = await getJson(`${API_BASE}/type/${chosenType}`);
      const list = (typeJson.pokemon || []).map((x) => x.pokemon);
      if (!list.length) {
        setStatus("No pokemons found for that type.");
        return;
      }

      const chosen = pickN(list, count);
      setStatus("Fetching details for each pokemon (this may take a moment)...");
      const detailPromises = chosen.map((p) => getJson(p.url));
      const details = await Promise.all(detailPromises);
      details.forEach((d) => cardsEl.appendChild(createCard(d)));
      setStatus("Done — enjoy your Pokémon cards!");
    }
  } catch (err) {
    console.error(err);
    setStatus("Something failed. Check browser console for error.");
  }
};

goBtn.addEventListener("click", showCards);

// load types when page opens
loadTypes();
