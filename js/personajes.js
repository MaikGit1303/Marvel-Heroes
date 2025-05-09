const personajes = [
  { nombre: 'HULK', imagen: 'img/Hulk.gif' },
  { nombre: 'THOR', imagen: 'img/thor.gif' },
  { nombre: 'CAPITÁN AMÉRICA', imagen: 'img/capitan-america.gif' },
  { nombre: 'HOMBRE ARAÑA', imagen: 'img/spider-man.gif' },
  { nombre: 'DEAD POOL', imagen: 'img/Deadpool.gif' },
  { nombre: 'WOLVERINE', imagen: 'img/Wolverine.gif' },
  { nombre: 'BLACK WIDOW', imagen: 'img/Black-Widow.gif' },
  { nombre: 'IRON MAN', imagen: 'img/iron-man.gif' },
  { nombre: 'CAPITÁN MARVEL', imagen: 'img/Capitana-Marvel.gif' },
  { nombre: 'DOCTOR STRANGE', imagen: 'img/Doctor-Strange.gif' },
];

const container = document.getElementById('personajesContainer');
const searchInput = document.getElementById('searchInput');

function renderPersonajes(filteredPersonajes) {
  container.innerHTML = '';
  filteredPersonajes.forEach(personaje => {
    const link = document.createElement('a');
    const fileName = personaje.nombre.toLowerCase().replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '') + '.html';
    link.href = 'heroes/' + fileName;
    link.style.textDecoration = 'none';

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = personaje.imagen;
    img.alt = personaje.nombre;

    const nombre = document.createElement('div');
    nombre.className = 'nombre';
    nombre.textContent = personaje.nombre;

    card.appendChild(img);
    card.appendChild(nombre);

    link.appendChild(card);
    container.appendChild(link);
  });
}

renderPersonajes(personajes);

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = personajes.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm)
  );
  renderPersonajes(filtered);
});
