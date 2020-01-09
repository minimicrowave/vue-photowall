<template>
  <v-app-bar app color="primary" dark>
    <router-link to="/" class="title">PhotoWall</router-link>
    <v-spacer></v-spacer>
    <router-link to="/about">
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "navigationBar"
};
</script>