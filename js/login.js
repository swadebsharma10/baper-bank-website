document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('submit btn is clicked')
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

   if(email === 'swadeb2012@gmail.com' && password === '701012'){
    // console.log('valid user')
    window.location.href='bank.html'
   }
   else{
    alert('Please provide Your valid Password')
   }
})

