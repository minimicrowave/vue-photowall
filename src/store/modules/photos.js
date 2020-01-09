import axios from 'axios';

const state = {
	photos: []
};

const getters = {
	allPhotos: (state) => state.photos
};

const actions = {
	fetchPhotos: async ({ commit }) => {
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=20');
		commit('setPhotos', data);
	},
	updatePhoto: async ({ commit }, updatedPhoto) => {
		const { data } = await axios.put(
			`https://jsonplaceholder.typicode.com/photos/${updatedPhoto.id}`,
			updatedPhoto
		);
		commit('setPhoto', data);
	}
};

const mutations = {
	setPhotos: (state, photos) => (state.photos = photos),
	setPhoto: (state, updatedPhoto) => {
		const index = state.photos.findIndex((photo) => photo.id === updatedPhoto.id);
		if (index > -1) state.photos[index] = updatedPhoto;
	}
};

export default { state, getters, mutations, actions };
