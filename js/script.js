const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nomeUsuario = document.getElementById('name').value;
    let emailUsuario = document.getElementById('email').value;
    console.log(nomeUsuario, emailUsuario);
    let data = {
        nomeUsuario,
        emailUsuario,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)
    form.reset();
    Swal.fire(
        'Parabéns!!!',
        'Seus dados foram enviados com sucesso',
        'success'
      )
})