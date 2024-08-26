<template>
    <v-dialog v-model="isVisible" max-width="600px">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Criar Usuário
        </v-card-title>
        <v-card-text>
          <v-form ref="createUserForm" v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12">
                    <v-text-field
                      v-model="newUser.uuid"
                      label="ID (UUID)"
                      required
                      outlined
                      dense
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newUser.name"
                    label="Nome"
                    required
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newUser.email"
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
    },
    data() {
      return {
        isVisible: this.value,
        newUser: {
          name: '',
          email: '',
          uuid: '',
        },
        valid: false,
      };
    },
    watch: {
      value(val) {
        this.isVisible = val;
      },
      isVisible(val) {
        this.$emit('input', val);
      },
    },
    methods: {
      close() {
        this.isVisible = false;
        this.resetForm();

      },
      async save() {
        if (this.$refs.createUserForm.validate()) {
            try {
                const res = await axios.post('/users', this.newUser);
                console.log(res)
                showSuccessAlert(res.data.message);
            } catch (error) {
                showErrorAlert(error.response.data.message)
            }

          this.$emit('user-updated');
          this.close();

        }
      },
      resetForm() {
        this.newUser.uuid = ''
        this.newUser.email = ''
        this.newUser.name = ''
      },
    },
  };
  </script>
  