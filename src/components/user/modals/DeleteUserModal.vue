<template>
  <v-dialog v-model="isVisible" max-width="600px">
    <v-card>
      <v-card-title class="headline grey lighten-2">
        Confirmar Exclusão
      </v-card-title>
      <v-card-text>
        <v-container>
            <v-col cols="12">
              <v-text-field
                v-model="selectedUser.id"
                label="ID (UUID)"
                outlined
                dense
                disabled
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="selectedUser.name"
                label="Nome"
                outlined
                dense
                disabled
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="selectedUser.email"
                label="E-mail"
                outlined
                dense
                disabled
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <p>Você tem certeza de que deseja excluir o usuário selecionado?</p>
            </v-col>
        </v-container>
      </v-card-text>
      <v-card-actions class="justify-center pb-10">
        <v-btn color="grey darken-3" @click="close" outlined>Cancelar</v-btn>
        <v-btn color="red darken-2" @click="confirmDelete" outlined>Excluir</v-btn>
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
      isVisible: this.value,
      selectedUser: { ...this.user },
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
    user(sentUser) {
      console.log(sentUser);
    if (sentUser) {
      this.selectedUser = { ...sentUser };      }
  },
  },
  methods: {
    close() {
      this.isVisible = false;
      this.resetForm();

    },
    async confirmDelete() {
      try {
          const res = await axios.delete('/users/'+this.selectedUser.id);
          console.log(res)
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
