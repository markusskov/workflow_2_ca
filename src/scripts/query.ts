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
  console.log(result);

  for (let i = 0; i < result.length; i++) {
    container.innerHTML += `
    <li class="cards">
      <img src="${result[i].image}" />
      ${result[i].name} | ${result[i].gender}
    </li>
    `;
  }
}
