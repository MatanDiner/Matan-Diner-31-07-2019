

export const isFavorite = (id, favorites) => {

    return favorites.findIndex(fav => fav.id === id) !== -1;
}

