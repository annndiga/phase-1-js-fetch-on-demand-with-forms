const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('#searchByID');
      const movieDetails = document.querySelector('#movieDetails');
      const title = movieDetails.querySelector('h4');
      const summary = movieDetails.querySelector('p');
  
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
          title.innerText = data.title;
          summary.innerText = data.summary;
})
.catch(error => {
    title.innerText = 'Movie Not Found';
    summary.innerText = '';
    console.error(error);
  });
});
};

document.addEventListener('DOMContentLoaded', init);