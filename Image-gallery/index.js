

const url = 'https://api.unsplash.com/photos/random?count=10&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
const searchInput = document.getElementById('search');
const searchIcon = document.querySelector('.search_icon');
const picturesDiv = document.querySelector('.pictures');

async function performSearch(query) {
  const updatedUrl = query
    ? `https://api.unsplash.com/search/photos?query=${query}&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`
    : url;

  try {
    const res = await fetch(updatedUrl);
    const data = await res.json();

    picturesDiv.innerHTML = '';

    for (let i = 0; i < 12; i++) {
      const img = document.createElement('img');
      img.src = query ? data.results[i].urls.small : data[i].urls.small;
      picturesDiv.appendChild(img);
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}

window.addEventListener('load', () => {
  performSearch('');
});

function handleSearchInput() {
  performSearch(searchInput.value);
}

searchInput.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') {
    handleSearchInput();
  }
});

searchIcon.addEventListener('click', async () => {
  handleSearchInput();
});



  