<template>
  <v-app>
    <AppBar />
    <v-main class="grey lighten-3">
      <v-container fluid class="pa-4">
        <h1>Bem-vindo de volta, Admin.</h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '../components/AppBar.vue';

export default {
  components: {
    AppBar,
  },
};
</script>
