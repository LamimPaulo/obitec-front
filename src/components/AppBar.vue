<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Obi Tec oAuth Platform</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="goHome">Home</v-btn>
    <v-btn text @click="goToUsers">Usuários</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    goHome() {
        if (this.$route.path !== '/') {
            this.$router.push('/');
        }
    },
    goToUsers() {
        if (this.$route.path !== '/users') {
            this.$router.push('/users');
        }
    },
  },
};
</script>

<style scoped>
.v-toolbar-title {
  font-weight: bold;
}
</style>