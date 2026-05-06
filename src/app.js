/*
* File: app.js
* Author: Doktor Kristóf Márk
* Copyright: 2026, Doktor Kristóf Márk
* Group: Szoft I/N
* Date: 2026-05-06
* Github: https://github.com/dokkristof/
* Licenc: MIT
*/


import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const albumok = [
  { eloado: 'Pink Floyd', cim: 'The Dark Side of the Moon', ev: 1973, mufaj: 'Progressive Rock', hossz: 43 },
  { eloado: 'Michael Jackson', cim: 'Thriller', ev: 1982, mufaj: 'Pop', hossz: 42 },
  { eloado: 'Miles Davis', cim: 'Kind of Blue', ev: 1959, mufaj: 'Jazz', hossz: 45 },
  { eloado: 'The Beatles', cim: 'Abbey Road', ev: 1969, mufaj: 'Rock', hossz: 47 },
  { eloado: 'Queen', cim: 'A Night at the Opera', ev: 1975, mufaj: 'Rock', hossz: 43 },
  { eloado: 'Adele', cim: '21', ev: 2011, mufaj: 'Pop', hossz: 48 },
  { eloado: 'Kendrick Lamar', cim: 'To Pimp a Butterfly', ev: 2015, mufaj: 'Hip Hop', hossz: 79 },
  { eloado: 'Led Zeppelin', cim: 'Led Zeppelin IV', ev: 1971, mufaj: 'Hard Rock', hossz: 42 }
];

function createAlbumTable(albums) {
  const totalLength = albums.reduce((sum, album) => sum + album.hossz, 0);

  const table = document.createElement('table');
  table.className = 'table table-striped table-bordered align-middle';

  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th>Előadó</th>
      <th>Cím</th>
      <th>Év</th>
      <th>Műfaj</th>
      <th>Hossz</th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  albums.forEach(album => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${album.eloado}</td>
      <td>${album.cim}</td>
      <td>${album.ev}</td>
      <td>${album.mufaj}</td>
      <td>${album.hossz} perc</td>
    `;

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  const footer = document.createElement('div');
  footer.className = 'mt-3';
  footer.innerHTML = `<strong>Összesen:</strong> ${totalLength}`;

  return { table, footer };
}

const target = document.getElementById('album-table');
if (target) {
  const { table, footer } = createAlbumTable(albumok);
  target.appendChild(table);
  target.appendChild(footer);
} else {
  console.error('Album table container not found');
}
