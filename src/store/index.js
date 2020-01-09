import Vuex from 'vuex';
import Vue from 'vue';
import photos from './modules/photos';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		photos
	}
});
