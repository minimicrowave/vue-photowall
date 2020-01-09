<template>
  <div>
    <img :src="photo.url" :alt="photo.title" />
    <input type="text" v-model="title" @blur="updateTitle" :disabled="isBusy"/>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Photo",
  props: ["photo"],
  data: ({ photo }) => {
    return {
      title: photo.title,
      isBusy: false
    };
  },
  methods: {
    ...mapActions(["updatePhoto"]),
    async updateTitle() {
      this.isBusy = true;
      const updatedPhoto = {
        ...this.photo,
        title: this.title
      };
      await this.updatePhoto(updatedPhoto);
      this.isBusy = false;
    }
  }
};
</script>

<style>
img {
  display: block;
  object-fit: cover;
  width: 100%;
}
input {
  width: 100%;
}
input:disabled {
  background-color: rgba(36, 36, 36, 0.479);
}
</style>
