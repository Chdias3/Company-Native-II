// método 2 para validação do formulário
const form = document.getElementById('formValidation')
const nameUser = document.getElementById('formName')
const emailUser = document.getElementById('formEmail')

form.addEventListener('submit', e => {
  e.preventDefault()

  checkInputs()
})

// trim() - remove todos os espaçamentos que o usuario deixar na pagina e devonve sem espaços
function checkInputs() {
  var invalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ //expressao regular para email
  var nameIvalid = /[A-Z][a-z]*/
  const nameUserValue = nameUser.value.trim()
  const emailUserValue = emailUser.value.trim()

  if (nameUserValue === '') {
    //mostrar o erro validação
    //adicionar a class error
    errorValidation(nameUser, 'Nome é obrigatório!')
  } else if (nameIvalid.test(nameUserValue) == false) {
    errorValidation(nameUser, 'Nome informado incorretamente!')
    nameUserValue.focus()
  } else {
    //adicionar a class success
    successValidation(nameUser)
  }

  if (emailUserValue === '') {
    //mostrar o erro validação
    //adicionar a class error
    errorValidation(emailUser, 'E-mail é obrigatório!')
  } else if (invalid.test(emailUserValue) == false) {
    errorValidation(emailUser, 'E-mail informado incorretamente!')
    nameUserValue.focus()
  } else {
    //adicionar a class success
    successValidation(emailUser)
  }
}

// parentElement - retorna uma referencia direta do pai que é  <p class="controlError">
function errorValidation(input, message) {
  const controlForm = input.parentElement
  const small = controlForm.querySelector('small')

  small.innerText = message
  controlForm.className = 'controlError error'
}

function successValidation(input) {
  const controlForm = input.parentElement

  controlForm.className = 'controlError success'
}

// function validate_form(formCon) {
//   var invalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ //expressao regular para email

//   var nome = document.getElementById('formName')
//   var email = document.getElementById('formEmail')
//   var cellphone = document.getElementById('cellphone')

//   var box_nome = document.querySelector('.msg-nome')
//   var box_email = document.querySelector('.msg-email')
//   box_nome.style.display = 'none'
//   box_email.style.display = 'none'

//   if (nome.value == '') {
//     box_nome.innerHTML = 'Nome é obrigatório!'
//     box_nome.style.display = 'block'
//     nome.focus()
//     // nome.style.backgroundColor = '#c7c1c1'
//     return false //return false cancela a ação de envio padrão (interrompe o envio do formulário). Isso significa que não faça nada ao enviar. Se não chamarmos uma função através do evento onsubmit ela funcionará como deve funcionar ou seja Para enviar o formulário. isso normalmente é usado para cancelar o envio do formulário se ele não atender aos critérios. Por exemplo, após realizar a validação nos campos do formulário. Se o formulário não for válido, você provavelmente deseja cancelar o envio
//   }

//   // if (invalid.test(nome.value) == false) {
//   //   box_nome.innerHTML = 'Nome informado incorretamente!'
//   //   box_nome.style.display = 'block'
//   //   nome.focus()
//   //   return false
//   // }

//   if (email.value == '') {
//     box_email.innerHTML = 'E-mail é obrigatório!'
//     box_email.style.display = 'block'
//     email.focus()
//     // email.style.backgroundColor = '#c7c1c1'
//     return false
//   }

//   if (invalid.test(email.value) == false) {
//     box_email.innerHTML = 'E-mail informado incorretamente!'
//     box_email.style.display = 'block'
//     email.focus()
//     return false
//   }

//   if (cellphone.value == '') {
//     cellphone.focus()
//     cellphone.style.backgroundColor = '#c7c1c1'
//     return false
//   }

//   return true //return true- seu formulário será enviado e redirecionará
// }
