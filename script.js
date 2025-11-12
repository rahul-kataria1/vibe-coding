document.getElementById('entertain-me').addEventListener('click', fetchMeme);

function fetchMeme() {
    fetch('https://meme-api.com/gimme')
        .then(response => response.json())
        .then(data => {
            const memeImage = document.getElementById('meme');
            memeImage.src = data.url;
            memeImage.alt = data.title;
        })
        .catch(error => console.error('Error fetching meme:', error));
}