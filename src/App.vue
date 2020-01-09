<template>
  <v-app>
    <NavigationBar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import NavigationBar from "./components/layouts/NavigationBar";

export default {
  name: "App",
  components: { NavigationBar },
};
</script>

<style>
a {
  text-decoration: none !important;
  color: inherit !important;
}

a.title {
  font-weight: 900 !important;
  letter-spacing: 4px !important;
}
</style>
