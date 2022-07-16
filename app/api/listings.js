import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

export const addListing = (item_to_save, onUploadProgress) => {
    const data = new FormData();
    data.append('title', item_to_save.title);
    data.append('price', item_to_save.price);
    data.append('categoryId', item_to_save.category.value);
    data.append('description', item_to_save.description);
    if (item_to_save.id)
    {
        data.append('id', item_to_save.id);
    }
    //console.log(item_to_save, data, 4444);

    item_to_save.images.forEach((image, index) =>
    data.append('images', {
        name: 'image' + index,
        type: 'image/jpeg',
        uri: image
    }));

    if (item_to_save.location)
    {
        data.append('location', JSON.stringify(item_to_save.location));
    }
    return client.post(endpoint, data, {
        onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total)
    });
}

export default {
    addListing,
    getListings,
};