<template>
  <div class="photowall">
    <div v-if="isLoading">Loading....</div>
    <div v-else :key="photo.id" v-for="photo in allPhotos" class="photo">
      <Photo v-bind:photo="photo"></Photo>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Photo from "./Photo";

export default {
  name: "Photos",
  components: { Photo },
  async created() {
    await this.fetchPhotos();
    this.isLoading = false;
  },
  computed: mapGetters(["allPhotos"]),
  methods: { ...mapActions(["fetchPhotos"]) },
  data: () => ({
    isLoading: true
  })
};
</script>

<style>
.photowall {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}

.photo {
  background-color: darkcyan;
  padding: 2px;
  display: inline-block;
}
</style>