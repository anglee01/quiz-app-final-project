  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  import { getDatabase,ref,get, set, push,child, onChildAdded,remove,onValue  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBG5kiU1Fd4zcYPHf7sfWkhlho5CmIWmKA",
    authDomain: "myfirstwebpage-7f351.firebaseapp.com",
    databaseURL: "https://myfirstwebpage-7f351-default-rtdb.firebaseio.com",
    projectId: "myfirstwebpage-7f351",
    storageBucket: "myfirstwebpage-7f351.appspot.com",
    messagingSenderId: "179292247182",
    appId: "1:179292247182:web:cb5e6a9da0bf7bc8a5a5df",
    measurementId: "G-65W36YZKZZ"
  };



  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  const database = getDatabase();
  var main_option = document.getElementById("main-option")
  var question = document.getElementById("question")
  var total_question = document.getElementById("total_question")
  var current_question = document.getElementById("current_question")
  var yourresult = document.getElementById("yourresult")
  var currentIndex = 0;
  var marks=0
  
  var arr = []  
  window.takedata=function(){
    const taskreference = ref(database, `taska/`)
    onChildAdded(taskreference,function(data){
  
      arr.push(data.val());
 console.log(arr)
        })            

      
setTimeout(function(){opt(currentIndex)},3000);     
  }
  
  takedata()

  window.increa=function() {
    if (currentIndex < arr.length ) {
  
      currentIndex = currentIndex + 1
      b=currentIndex
  opt(currentIndex)
  removeactiveclass()
 
}
final(currentIndex)
  }


  var b = 1

 window.opt=function(a){
    total_question.innerHTML = arr.length
    current_question.innerHTML = b
    question.innerHTML = ` ${arr[a].question}`
    for (var i = 0; i <arr[a].option.length; i++) {
      main_option.innerHTML += `
      <button class="button_stye m-3 rounded-pill col-5" onclick="scor('${arr[a].correctanswer}','${arr[a].option[i]}');increa()" id="options">${arr[a].option[i]}</button>`
    }
  
  }
  
window.removeactiveclass = function() {

    for (var i = 0; i < arr[currentIndex].option.length; i++) {
      var options = document.getElementById("options")
      options.remove()
    }
  }
  




window.scor=function(answer,select) {
      if (answer == select) {
      marks = marks + 1
      console.log("score" + marks)
  
    }
     


  }
  

  window.final=function(a) {
    var total_score = document.getElementById("total_score")
    var your_score = document.getElementById("your_score")
    var per = document.getElementById("per")
    var me = document.getElementById("me")
    var per_cal =Math.round( marks/arr.length * 100)
    var pass
    if (per_cal <= 50) {
      pass = "FAIL"
    } else {
      pass = "PASS"
    }
    console.log(arr.length)
    if(a == arr.length) {
      yourresult.style.visibility = "visible"
      your_score.innerHTML = `${marks}`
      total_score.innerHTML = `${arr.length}`
      per.innerHTML = `${per_cal}`
      me.innerHTML = `${pass}`
      
  
    }
  }
