var firebaseConfig = {
    apiKey: "AIzaSyDI4SBSP30ji9SzaQ8EE9i09By1nQntdNM",
    authDomain: "chatsite-6b45a.firebaseapp.com",
    databaseURL: "https://chatsite-6b45a-default-rtdb.firebaseio.com",
    projectId: "chatsite-6b45a",
    storageBucket: "chatsite-6b45a.appspot.com",
    messagingSenderId: "673109140721",
    appId: "1:673109140721:web:8517768c22d6ecf8bd3550"
  };

  firebase.initializeApp(firebaseConfig);

  user_email = localStorage.getItem("user_email");
  document.getElementById("user_email").innerHTML = "Welcome " + user_email + "!";

  function addRoom() { 
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
        localStorage.setItem("room_name", room_name);
         window.location = "https://bhandariarnav2020.github.io/chatsitepage";
     }
     function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            snapshot.forEach(
                  function(childSnapshot) {
            childKey  = childSnapshot.key;  
             Room_names = childKey;
             console.log("Room Name - " + Room_names);
             row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
             document.getElementById("output").innerHTML += row; }); }); }
      getData();
      function redirectToRoomName(name) {
        console.log(name);
        localStorage.setItem("room_name", name);
         window.location = "https://bhandariarnav2020.github.io/chatsitepage"; 
        }
        function logout() { 
              localStorage.removeItem("user_email");
               localStorage.removeItem("room_name");
                window.location = "https://bhandariarnav2020.github.io/chatsite"; 
              }
              