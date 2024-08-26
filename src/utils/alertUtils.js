// src/utils/alertUtils.js

import Swal from 'sweetalert2';

export function showSuccessAlert(message) {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: message || 'Acão completada com sucesso',
    showConfirmButton: false,
    timer: 3000,
    toast: true,
    customClass: {
      popup: 'small-toast'
    }
  });
}

export function showErrorAlert(message) {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: message || 'Oops... algo saiu errado!',
    showConfirmButton: false,
    timer: 3000,
    toast: true,
    customClass: {
      popup: 'small-toast'
    }
  });
}
