document.addEventListener('DOMContentLoaded', function() {

  const copyButton = document.getElementById('copyButton');
  const emailAddress = 'teranabisai471@gmail.com';


  copyButton.addEventListener('click', function() {
 
    navigator.clipboard.writeText(emailAddress)
      .then(() => {

        Swal.fire({
          title: 'Correo copiado!',
          timer: 2000, 
          timerProgressBar: true,
          showConfirmButton: false
        });
      })
      .catch((error) => {
        console.error('Error al copiar al portapapeles:', error);
        Swal.fire({
          title: 'Oops...',
          text: 'Hubo un problema al intentar copiar el correo electrónico al portapapeles.',
        });
      });
  });
});

  
