const _ = require('lodash');

const container = document.querySelector('.list');

export async function getCharacters() {
  let results = await fetch('https://rickandmortyapi.com/graphql', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      query: `{
        characters {
          results {
            name
            image
            gender
          }
        }
      }`,
    }),
  });
  let characters = await results.json();
  const result = characters.data.characters.results;

  let descSort = _.orderBy(result, ['name'], ['desc']);
  console.log(descSort);

  for (let i = 0; i < descSort.length; i++) {
    container.innerHTML += `
    <li class="cards">
      <img src="${descSort[i].image}" />
      <h2>${descSort[i].name} | ${descSort[i].gender}</h2>
    </li>
    `;
  }
}
