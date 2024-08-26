<template>
    <v-dialog v-model="isUpdateVisible" max-width="600px">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Atualizar Usuário
        </v-card-title>
        <v-card-text>
          <v-form ref="updateUserForm" v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12">
                    <v-text-field
                      v-model="selectedUser.id"
                      label="ID (UUID)"
                      required
                      outlined
                      dense
                      disabled
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="selectedUser.name"
                    label="Nome"
                    required
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="selectedUser.email"
                    label="E-mail"
                    required
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="justify-end pa-4">
          <v-btn color="red darken-1" @click="close" outlined>Cancelar</v-btn>
          <v-btn color="green darken-1" @click="save" outlined>Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import axios from 'axios';
    import { showSuccessAlert, showErrorAlert } from '@/utils/alertUtils';

  export default {
    props: {
      value: Boolean,
      user: {
        type: Object,
        default: () => ({ uuid: '', name: '', email: '' }),
      },
    },
    data() {
      return {
        isUpdateVisible: this.value,
        selectedUser: { ...this.user },
        valid: false,
      };
    },
    watch: {
      value(val) {
        this.isUpdateVisible = val;
      },
      isUpdateVisible(val) {
        this.$emit('input', val);
      },
      user(sentUser) {
        console.log(sentUser);
      if (sentUser) {
        this.selectedUser = { ...sentUser };      }
    },
    },
    methods: {
      close() {
        this.isUpdateVisible = false;
        // this.resetForm();

      },
      async save() {
        try {
            const res = await axios.put('/users/'+this.selectedUser.id, this.selectedUser);
            showSuccessAlert(res.data.message);
        } catch (error) {
            showErrorAlert(error.response.data.message)
        }
      this.$emit('user-updated');
      this.close();

      },
      resetForm() {
        this.selectedUser.uuid = ''
        this.selectedUser.email = ''
        this.selectedUser.name = ''
      },
    },
  };
  </script>
  