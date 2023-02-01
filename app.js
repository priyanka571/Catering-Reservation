const firebaseConfig = {
  apiKey: "AIzaSyAIkceCqtY6UcuL9Q_DX9MwvgQkDBzK_j8",
  authDomain: "cr-catering-and-reservation.firebaseapp.com",
  databaseURL: "https://cr-catering-and-reservation-default-rtdb.firebaseio.com/",
  projectId: "cr-catering-and-reservation",
  storageBucket: "cr-catering-and-reservation.appspot.com",
  messagingSenderId: "70854789764",
  appId: "1:70854789764:web:5de80a2d706bea101950d1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e) {
  e.preventDefault();
  var name = getInputVal('name');
  var lname = getInputVal('lname');
  var email = getInputVal('email');
  var password = getInputVal('password');
  var confpwd = getInputVal('confpwd');
  saveMessage(name, lname, email, password, confpwd);
  document.querySelector('.alert').style.display = 'block';
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  document.getElementById('contactForm').reset();
}
function getInputVal(id){
  return document.getElementById(id).value;
}
function saveMessage(name, lname, email, password, confpwd){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    lname: lname,
    email: email,
    password: password,
    confpwd: confpwd,
  });
}
