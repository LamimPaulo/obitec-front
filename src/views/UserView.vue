<template>
    <v-app>
      <AppBar />
      <v-main class="grey lighten-3">
        <v-container fluid class="pa-4">
          <v-row>
            <v-col class="text-right">
                    <v-btn  color="primary" @click="showCreateUserModal">Adicionar Usuário</v-btn>
            </v-col>
          </v-row>
          <v-col/>
          <UserList ref="userList" />
          
          <CreateUserModal
            v-model="isCreateUserModalOpen"
            @user-updated="handleUserListUpdate"
          />
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import AppBar from '@/components/AppBar.vue';
  import UserList from '@/components/user/UserList.vue';
  import CreateUserModal from '@/components/user/modals/CreateUserModal.vue';
  
  export default {
    components: {
      AppBar,
      UserList,
      CreateUserModal,
    },
    data() {
      return {
        isCreateUserModalOpen: false,
      };
    },
    methods: {
      showCreateUserModal() {
        this.isCreateUserModalOpen = true;
      },
      handleUserListUpdate() {
        this.isCreateUserModalOpen = false;
        this.$nextTick(() => {
        if (this.$refs.userList) {
            this.$refs.userList.fetchUsers();
        } else {
            console.error('UserList ref is not available');
        }
        });
    },
    },
  };
  </script>
  