const API_KEY = 'live_p6iVI1ioCEGoQdLGYqbIXdpOS9NVRrKIZYrDUJhgKcUvqAY3mNojGEOTw9dkXtQZ';

const fetchBreeds = (id) => {
    return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`)
        .then(response => response.json());
}

const fetchCatByBreed = (id) => {
    return fetch(`https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${id}`)
        .then(response => response.json());
}

export { fetchBreeds, fetchCatByBreed };