// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCvlyWGdgV6MqDJOiqcgwG_Gd_P67te0FI",
  authDomain: "letschatwebapp-8bafc.firebaseapp.com",
  projectId: "letschatwebapp-8bafc",
  storageBucket: "letschatwebapp-8bafc.appspot.com",
  messagingSenderId: "1049113065806",
  appId: "1:1049113065806:web:c2fa60725916d95d9d861f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
  room_name = document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id=" +Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}