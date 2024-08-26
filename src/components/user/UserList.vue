<template>
  <v-container>
    <UpdateUserModal
    v-model="isEditUserModalOpen"
    :user="selectedUser"
    @user-updated="fetchUsers"
  />

  <DeleteUserModal
    v-model="isDeleteUserModalOpen"
    :user="selectedUser"
    @user-updated="fetchUsers"
  />
    <v-data-table
      :headers="headers"
      :items="users"
      item-key="id"
      class="elevation-1"
    >
    
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Usuários</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn icon @click="showEditUserModal(item)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="showDeleteUserModal(item)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import axios from 'axios';
import UpdateUserModal from './modals/UpdateUserModal.vue';
import DeleteUserModal from './modals/DeleteUserModal.vue';
  
  export default {
    name: 'UserList',
    components: {
      UpdateUserModal,
      DeleteUserModal,
    },
    data() {
      return {
        isEditUserModalOpen: false,
        isDeleteUserModalOpen: false,
        selectedUser: null,
        users: [],
        headers: [
          { text: 'UUID', value: 'id' },
          { text: 'Nome', value: 'name' },
          { text: 'E-mail', value: 'email' },
          { text: 'Ações', value: 'actions', sortable: false },
        ],
      };
    },
    methods: {
      showEditUserModal(user){
        this.selectedUser = user;
        this.isEditUserModalOpen = true;
      },
      showDeleteUserModal(user){
        this.selectedUser = user;
        this.isDeleteUserModalOpen = true;
      },
      async fetchUsers() {
        const res = await axios.get('/users')
        this.users = res.data.data.data;
      },
    },
    created() {
      this.fetchUsers();
    },
  };
  </script>
