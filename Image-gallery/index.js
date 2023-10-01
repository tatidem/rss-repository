

const url = 'https://api.unsplash.com/photos/random?count=12&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
const searchInput = document.getElementById('search');
const searchIcon = document.querySelector('.search_icon');
const picturesDiv = document.querySelector('.pictures');
const clearSearchIcon = document.getElementById('clear-search');

async function performSearch(query) {
  const updatedUrl = query
    ? `https://api.unsplash.com/search/photos?query=${query}&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo&count=12`
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
  searchInput.focus();
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

clearSearchIcon.addEventListener('click', () => {
    searchInput.value = ''; 
    clearSearchIcon.style.display = 'none'; 
    searchInput.focus(); 
  });
  
  searchInput.addEventListener('input', () => {
    if (searchInput.value) {
      clearSearchIcon.style.display = 'block'; 
    } else {
      clearSearchIcon.style.display = 'none'; 
    }
  });



  