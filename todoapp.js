//unprotected
// stage = 0 - firstform, 1 - signupform, 2 - loginform, 3 - dashboard, 4 - todolist, 5 - account settings
let stage = 0;
let stageName = ["0 - firstform", "1 - signupform", "2 - loginform", "3 - dashboard", "4 - todolist", "5 - account settings"];

// function changeStage()  {
//     switch(stage){
//         case 0:
//             firstForm.style.display="block";
//             signUpForm.style.display="none";
//             logInForm.style.display="none";
//             dashboardForm.style.display="none";
//             toDoForm.style.display="none";
//             accSettingsForm.style.display="none";
//             break;
//         case 1:
//             firstForm.style.display="none";
//             signUpForm.style.display="block";
//             logInForm.style.display="none";
//             dashboardForm.style.display="none";
//             toDoForm.style.display="none";
//             accSettingsForm.style.display="none";
//             break;
//         case 2:
//             firstForm.style.display="none";
//             signUpForm.style.display="none";
//             logInForm.style.display="block";
//             dashboardForm.style.display="none";
//             toDoForm.style.display="none";
//             accSettingsForm.style.display="none";
//             break;            
//         case 3:
//             firstForm.style.display="none";
//             signUpForm.style.display="none";
//             logInForm.style.display="none";
//             dashboardForm.style.display="block";
//             toDoForm.style.display="none";
//             accSettingsForm.style.display="none";
//             break;
//         case 4:
//             firstForm.style.display="none";
//             signUpForm.style.display="none";
//             logInForm.style.display="none";
//             dashboardForm.style.display="none";
//             toDoForm.style.display="block";
//             accSettingsForm.style.display="none";
//             break; 
//         case 5:
//                 firstForm.style.display="none";
//                 signUpForm.style.display="none";
//                 logInForm.style.display="none";
//                 dashboardForm.style.display="none";
//                 toDoForm.style.display="none";
//                 accSettingsForm.style.display="block";
//                 break;                                 
//         default:
//             firstForm.style.display="block";
//             signUpForm.style.display="none";
//             logInForm.style.display="none";
//             dashboardForm.style.display="none";
//             toDoForm.style.display="none";  
//             accSettingsForm.style.display="none";      
//     }
//     console.log("stage = " + stageName[stage]);
// }

createHtml(stage);

function createHtml(stage){
    // create body elements
    var headingHtml = (`
    <h1>TO-DO LIST MAGUS</h1>
    <h2>list of things that need to get done</h2>

    <p class="p-hidden"></p>

    <section>&nbsp;</section>
    `);

    var mainHtml ="";
    if(stage === 0){    // 0 - firstform
        mainHtml = (`
            <div id="first-form" style="display: block;" >
                <div>
                    <button id="signup" type="button" class="button">Sign Up</button>
                </div>
                <div>
                    <button id="login" type="button2" class="button">Log In</button>
                </div>
            </div>
        `) ;
    }else if(stage === 1){  // 1 - signupform
        mainHtml = (`
            <div id="signup-form" style="display: block;">
                <form >
                    <h2 id="headerSignUp">Please complete all information below:</h2>
                    <br>

                    <label for="fname">First name:</label><br>              
                    <input type="text" id="fname" name="fname" size="30"><br><br>
            
                    <label for="lname">Last name:</label><br>
                    <input type="text" id="lname" name="lname" size="30"><br><br>
            
                    <label for="email">Email:</label><br>                              
                    <input type="text" id="email" name="email" size="30"><br><br>
            
                    <label for="password">Password:</label><br>
                    <input type="password" id="password" name="password" size="30"><br><br>

                    <input type="checkbox" id="agreement" name="agreement" value="ok">
                    <label for="agreement" style="font-size: small;"> I agree to the Terms of Use</label><br><br>
            
                    <div>
                        <button id="signupform" type="button" class="button">Sign Up</button>
                    </div>
                </form>
            </div>
        
        `);
    }else if(stage ===2){   // 2 - loginform
        mainHtml = (`
            <div id="login-form" style="display: block;">
                <form >
                    <h2 id="headerLogin" >Please complete all information below:</h2>
                    <br>
                    
                    <label for="email1">Email:</label><br>                              
                    <input type="text" id="email1" name="email1" size="30"><br><br>
                    
                    <label for="password1">Password:</label><br>
                    <input type="password" id="password1" name="password1" size="30"><br><br>
                    
                    <div>
                        <button id="loginform" type="button" class="button">Log In</button>
                    </div>
                    <div>
                        <button id="backfromlogin" type="button" class="button">Back</button>
                    </div>
                </form>
            </div>
        `);
    }else if(stage === 3){  //  3 - dashboard
        mainHtml = (`
            <div id="dashboard-form" style="display: none;">
                <form >
                    <h2>DASHBOARD - Please choose existing or create new to-do list below:</h2>
                    <br>

                        <div id="myDIV" class="header-dash">
                            <h3 style="margin:5px">My To Do Lists</h3>
                            <input class="input-dash" type="text" id="newListNameInput" placeholder="Enter new list name ...">
                            <span id="newtodolist" class="addBtn">Add</span>
                            <span id="accSettingsBtn" class="accSettingsBtn">Account Settings</span>
                            <span id="logOutBtn" class="logOutBtn">Log Out</span>
                        </div><br>

                        <ul id="todolistsul">
                        </ul>

                    <br><br>
                    
                </form>

            </div>           
        `);
    }else if(stage === 4){  //  4 - todolist
        mainHtml = (`
            <div id="todo-form" style="display: none;">
                <form >
                    <h2>TO-DO List:</h2>
                    <br>

                        <div id="todoDIV" class="header-dash">
                            <h3 id="h3-listname" style="margin:5px">My To Do List Name Here</h3>
                            <input class="input-dash" type="text" id="newListItemInput" placeholder="Enter new list item ...">
                            <span id="newlistitem" class="addBtn">Add</span>
                            <span id="accSettingsBtn" class="accSettingsBtn">Account Settings</span>
                            <span id="logOutBtn" class="logOutBtn">Log Out</span>
                        </div><br>

                        <ul id="todolistul">
                        </ul>
                    <br>
                    <div>
                        <button id="backsavelist" type="button" class="button">Back</button>
                    </div>
                </form>

            </div>        
        `);

    }else{  //  5 - account settings
        mainHtml = (`
            <div id="account-settings-form" style="display: none;">
                <form >
                    <h2 id="headerAccSettings">Account Settings:</h2>
                    <br>

                    <label for="asfname">First name:</label><br>              
                    <input type="text" id="asfname" name="fname" size="30"><br><br>
                    
                    <label for="aslname">Last name:</label><br>
                    <input type="text" id="aslname" name="lname" size="30"><br><br>
                    
                    <label for="asemail">Email:</label><br>                              
                    <input type="text" id="asemail" name="email" size="30"><br><br>
                    
                    <label for="aspassword">Password:</label><br>
                    <input type="password" id="aspassword" name="password" size="30"><br><br>
                    
                    <label for="asrepassword">ReEnter Password:</label><br>
                    <input type="password" id="asrepassword" name="password" size="30"><br><br>               
                    
                    <div>
                        <button id="accsettingssave" type="button" class="button">Save</button>
                        <button id="accsettingscancel" type="button" class="button">Cancel</button>
                    </div>

                </form>
            </div>        
        `);
    }

    document.getElementById("heading").innerHTML = headingHtml + mainHtml;
    console.log(heading + mainHtml);

    if(stage === 0){
        let buttonSignUp = document.getElementById("signup");
        let buttonLogIn = document.getElementById("login");
        buttonSignUp.addEventListener("click",signUpClicked);
        buttonLogIn.addEventListener("click",logInClicked);
    }else if(stage ===1){
        let buttonSignUpForm = document.getElementById("signupform");
        buttonSignUpForm.addEventListener("click",signUpFormClicked);
    }else if(stage === 2){
        let buttonLogInForm = document.getElementById("loginform");
        let buttonBackFromLogin = document.getElementById("backfromlogin");
        buttonLogInForm.addEventListener("click",logInFormClicked);
        buttonBackFromLogin.addEventListener("click",backFromLoginClicked);
    }else if(stage === 3){
        let buttonNewTodoList = document.getElementById("newtodolist");
        let buttonAccSettings = document.getElementById("accSettingsBtn");
        let buttonLogOut = document.getElementById("logOutBtn");
        buttonNewTodoList.addEventListener("click",newToDoList);
        buttonAccSettings.addEventListener("click", changeAccSettings)
        buttonLogOut.addEventListener("click", logOut);
    }else if(stage === 4){
        let toDoForm = document.getElementById("todo-form" );
        let editableListName = document.getElementById("h3-listname");
        let buttonNewListItem = document.getElementById("newlistitem");
        let buttonAccSettings = document.getElementById("accSettingsBtn");
        let buttonLogOut = document.getElementById("logOutBtn");
        let buttonBackOrSaveList = document.getElementById("backsavelist");
        toDoForm.addEventListener("click",toggleLiChecked,false);  
        editableListName.addEventListener("click",editTodoListName);      
        buttonNewListItem.addEventListener("click",newListItem);
        buttonAccSettings.addEventListener("click", changeAccSettings);
        buttonLogOut.addEventListener("click", logOut);  
        buttonBackOrSaveList.addEventListener("click",backOrSaveTodoList);      
    }else{
        let buttonAccSettingsSave = document.getElementById("accsettingssave");
        let buttonAccSettingsCancel = document.getElementById("accsettingscancel");
        buttonAccSettingsSave.addEventListener("click",AccSettingsSave);
        buttonAccSettingsCancel.addEventListener("click",AccSettingsCancel);
    }
}

function signUpClicked(){
        stage = 1;  //  1 - signupform
        createHtml(stage);
        console.log("stage = " + stageName[stage]);
}
    
function logInClicked(){
    stage = 2;  //  2 - loginform
    createHtml(stage);
    const loginheader = document.getElementById("headerLogin");
    loginheader.innerText = "Please complete all information below:";
    loginheader.style.color = "white";
    document.getElementById("email1").value="";
    document.getElementById("password1").value="";
    console.log("stage = " + stageName[stage]);
}

function backFromLoginClicked(){
    stage = 0;  //  0 - firstform
    createHtml(stage);
    console.log("stage = " + stageName[stage]);    
}

function validEmail(email){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
}

function hash(str) {
    var hash = 5381,
        i    = str.length;
  
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
  
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
     * integers. Since we want the results to be always positive, convert the
     * signed int to an unsigned by doing an unsigned bitshift. */
    return hash >>> 0;
}

function signUpFormClicked(){
 
    // 1-check sign up data 2-record data 3-go to dashboard form
    const checkBox = document.getElementById("agreement");
    const header = document.getElementById("headerSignUp");
    const email = document.getElementById("email");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const password = document.getElementById("password");
    let passhash = "";

    let errCnt = 0;
    let semicolon = "";

    header.innerText = "Please complete all information below:";
    header.style.color = "white";

    if(fname.value.length === 0 || lname.value.length === 0){
        header.innerText+=" missing First or Last name";
        errCnt++;
    };
    if(!validEmail(email.value)){
        semicolon = (errCnt>0)? "; " : " ";
        header.innerText+=semicolon +"Email not valid";
        errCnt++;
    };
    if(getUser(email.value) !== -1){
        semicolon = (errCnt>0)? "; " : " ";
        header.innerText+=semicolon +"Email already exists";
        errCnt++;
    };
    if(password.value.length === 0 ){
        semicolon = (errCnt>0)? "; " : " ";
        header.innerText+=semicolon +"Password missing";
        errCnt++;
    };
    if(!checkBox.checked){
        semicolon = (errCnt>0)? "; " : " ";
        header.innerText+=semicolon +"Check the agreement checkbox";
        errCnt++;
    };
    
    if(errCnt>0){
        header.style.color = "red";
        return;
    };
    
    // No errors - then add user to localStorage
    passhash = hash(password.value);
    addUser(fname.value,lname.value,email.value,passhash);
    console.log(getUser(email.value));

    // Logged user data
    lufname=fname.value;
    lulname=lname.value;
    luemail=email.value;
    lupassword=passhash;
    lutodolists = [];

    console.log("SignUpForm Logged User:");
    console.log(lufname + " " + lulname + " "+ luemail + " "+ password.value +" " + lupassword);
    console.log(lutodolists);

    // go to dashboard - todo lists
    stage = 3;
    console.log("stage = " + stageName[stage]);
    createHtml(stage);
    displayTodoLists("todolistsul");
}
    
function logInFormClicked(){
    // 1st-check log in info 2nd- go to dashboard - todo lists form

    const email1 = document.getElementById("email1");
    const password1 = document.getElementById("password1");
    const header1 = document.getElementById("headerLogin");
 
    let errCnt = 0;
    let semicolon = "";

    header1.innerText = "Please complete all information below:";
    header1.style.color = "white";

    // Answers should not be so detailed in real application !!!
    // Answers should be ambiguous !!!
    
    if(!validEmail(email1.value)){
        semicolon = (errCnt>0)? "; " : " ";
        header1.innerText+=semicolon +"Email not valid";
        errCnt++;
    }else if(getUser(email1.value) === -1){
        semicolon = (errCnt>0)? "; " : " ";
        header1.innerText+=semicolon +"Email not found";
        errCnt++;
    }; 
    if(password1.value.length === 0 ){
        semicolon = (errCnt>0)? "; " : " ";
        header1.innerText+=semicolon +"Password missing";
        errCnt++;
    }else if(hash(password1.value) !== getPassword(email1.value) && errCnt === 0){
        semicolon = (errCnt>0)? "; " : " ";
        header1.innerText+=semicolon +"Password does not match";
        errCnt++;
    };
    
    if(errCnt>0){
        header1.style.color = "red";
        return;
    }; 
    
    // No errors - proceed to dashboard (todo lists)

    // Logged user data
    let objUser = getUser(email1.value);
    lufname = objUser.firstName;
    lulname = objUser.lastName;
    luemail = email1.value;
    lupassword = objUser.password;
    lutodolists = objUser.todolists;

    console.log("Logged User:");
    console.log(lufname + " " + lulname + " "+ luemail + " "+ lupassword);
    console.log(lutodolists);
    
    stage = 3;
    console.log("stage = " + stageName[stage]);
    createHtml(stage);
    displayTodoLists("todolistsul");
}


function addUser(fname,lname,email,password){
    // Check if user already created
    if(getUser(email) !== -1) {
        return -1;
    };
    const objUser = {
                        "firstName": fname ,
                        "lastName": lname ,
                        "password": password ,
                        "todolists": [] 
                    };
    try{
        localStorage.setItem(email,JSON.stringify(objUser));
    }catch(e){
        console.error(e);
    };
    
}

function changeUser(fname,lname,email,password){

    //testing data here
    let todolistExamp = [ { "listname" : "grocerylist", "items":   [
                                                    {"el": "Bakery and Bread", "checked":false},
                                                    {"el": "Meat and Seafood", "checked":false},
                                                    {"el": "Pasta and Rice", "checked":false},
                                                    {"el": "Dairy, Cheese, and Eggs", "checked":false}
                                                    ]   
                            },

                            { "listname" : "apparellist", "items":   [
                                                    {"el": "sweater", "checked":false},
                                                    {"el": "jacket", "checked":false},
                                                    {"el": "jeans", "checked":false},
                                                    {"el": "socks", "checked":false}
                                                    ]   
                            }
                        ]  ;                                                                             


    const objUser = {
                        "firstName": fname ,
                        "lastName": lname ,
                        "password": password ,
                        "todolists": [] 
                    };
    objUser.todolists = getUserLists(email);                
    //objUser.todolists = todolistExamp; //testing data               
    try{
        localStorage.setItem(email,JSON.stringify(objUser));
    }catch(e){
        console.error(e);
    };
    
}

function changeUserTodolists(fname,lname,email,password,totdolists){
    const objUser = {
                        "firstName": fname ,
                        "lastName": lname ,
                        "password": password ,
                        "todolists": [] 
                    };
    objUser.todolists = totdolists;                
    try{
        localStorage.setItem(email,JSON.stringify(objUser));
    }catch(e){
        console.error(e);
    };
}

function removeUser(email){
    localStorage.removeItem(email);
}

function getUser(email){
    try{
        var objUser = localStorage.getItem(email);
        if(objUser === null){
            return -1;
        };
        objUser = JSON.parse(objUser);
        return objUser;
    }catch(e){
        console.error(e);
    };
}

function getPassword(email){
    var objUser1 = getUser(email);
    if(objUser1 === -1) {
        return; //return undefined
    };
    return objUser1.password;
}

function getUserLists(email){
    try{
        var objUser = localStorage.getItem(email);
        if(objUser === null){
            return -1;
        };
        objUser = JSON.parse(objUser);
        return objUser.todolists
    }catch(e){
        console.error(e);
    };
}

function addUserList(email,list){
    try{
        var objUser = localStorage.getItem(email);
        if(objUser === null){
            return -1;
        };
        objUser = JSON.parse(objUser);
        objUser.todolists.push(list);
        //console.log(objUser); 
        localStorage.setItem(email,JSON.stringify(objUser));
    }catch(e){
        console.error(e);
    };
}

// DASHBOARD functions

function displayTodoLists(UlId){
    const todoListsULId = document.getElementById(UlId);

    todoListsULId.innerHTML = "";
    for(var list of lutodolists){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(list.listname));
        li.setAttribute("id", list.listname); 
        todoListsULId.appendChild(li);
    }
    // add event handlers for LI elements
    var dashboardLists = todoListsULId.getElementsByTagName("LI");
    var i;
    for (i = 0; i < dashboardLists.length; i++) {
        dashboardLists[i].addEventListener("click",displayTodoList);
    }
}

function displayTodoList(){
    const todoListULId = document.getElementById("todolistul");

    todoListULId.innerHTML = "";

    let searchedList = getUserList(this.id);

    if( searchedList !== -1){
        for(var item of searchedList.items){
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(item.el));
            li.setAttribute("id", item.checked); 
            if(item.checked === true){
                li.classList.toggle("checked");
            }  
            todoListULId.appendChild(li);
        }    
    } 

    backsavelist = true; // Todo form button text -> back
    changeTodoFormButton(backsavelist);
    
    document.getElementById("h3-listname").innerText=this.id;

    stage = 4;
    console.log("stage = " + stageName[stage]);
    createHtml(stage);
}

// not used in the moment
function addCloseButtonToListElements(){
    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}

// Add a "checked" symbol when clicking on a list item - todo-form
function toggleLiChecked(ev){
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');

        ev.target.setAttribute("id", "true");

        backsavelist = false; // Todo form button text -> save
        changeTodoFormButton(backsavelist);
    }    
}

// Create a new list name when clicking on the "Add" button from DASHBOARD
function newToDoList() {
  //var li = document.createElement("li");
  var inputValue = document.getElementById("newListNameInput").value;
  //var t = document.createTextNode(inputValue);
  
  //li.appendChild(t);
  if (inputValue === '') {
      alert("You must enter new To-Do List name!");
  } else {
    const objList = { "listname" : inputValue, "items": [] };
    lutodolists.push(objList); // write to logged user variable
    addUserList(luemail,objList); // write to localStorage
    //document.getElementById("todolistsul").appendChild(li);
  }
  document.getElementById("newListNameInput").value = "";
  
  console.log("Logged User:");
  console.log(lufname + " " + lulname + " "+ luemail + " "+ lupassword);
  console.log(lutodolists);
  console.log("User from localStorage:");
  console.log(getUser(luemail));

  backsavelist = false; // Todo form button text -> save
  changeTodoFormButton(backsavelist);

  document.getElementById("h3-listname").innerText=inputValue;
  document.getElementById("todolistul").innerHTML = "";

  stage = 4;
  console.log("stage = " + stageName[stage]);
  createHtml(stage);
}

// Create a new list item when clicking on the "Add" button from ToDo-Form
function newListItem() {
    var li = document.createElement("li");
    var listname = document.getElementById("h3-listname").innerText;
    var inputValue = document.getElementById("newListItemInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must enter new To-Do List Item!");
    } else {
      //const objListItem = { "el" : inputValue, "checked": false };
      addElementToUserList(listname,inputValue); // write to localStorage 

      //lutodolists.push(objList); // write to logged user variable
      //addUserList(luemail,objList); // write to localStorage
      document.getElementById("todolistul").appendChild(li);
    }
    document.getElementById("newListItemInput").value = "";

    backsavelist = false; // Todo form button text -> save
    changeTodoFormButton(backsavelist);
    
    console.log("Logged User:");
    console.log(lufname + " " + lulname + " "+ luemail + " "+ lupassword);
    console.log(lutodolists);
    console.log("User from localStorage:");
    console.log(getUser(luemail));
  
    // add Close button
  //   var span = document.createElement("SPAN");
  //   var txt = document.createTextNode("\u00D7");
  //   span.className = "close";
  //   span.appendChild(txt);
  //   li.appendChild(span);
  
  //   for (i = 0; i < close.length; i++) {
  //     close[i].onclick = function() {
  //       var div = this.parentElement;
  //       div.style.display = "none";
  //     }
  //   }
}

function logOut(){
    stage = 0;
    console.log("stage = " + stageName[stage]);
    createHtml(stage);
}

function changeAccSettings(){
    // display/edit account settings
    const asfname = document.getElementById("asfname");
    const aslname = document.getElementById("aslname");
    const asemail = document.getElementById("asemail");
    const aspassword = document.getElementById("aspassword");
    const asrepassword = document.getElementById("asrepassword");
    asfname.value=lufname;
    aslname.value=lulname;
    asemail.value=luemail;
    aspassword.value="012345678912";        //dummy password
    asrepassword.value="012345678921"; 
    stage = 5;
    console.log("stage = " + stageName[stage]);
    createHtml(stage);     
}

function AccSettingsSave(){
    
    let errCnt = 0;
    let semicolon = "";
    const header2 = document.getElementById("headerAccSettings");
    const asfname = document.getElementById("asfname");
    const aslname = document.getElementById("aslname");
    const asemail = document.getElementById("asemail");
    const aspassword = document.getElementById("aspassword");
    const asrepassword = document.getElementById("asrepassword");

    header2.innerText = "Account Settings:";
    header2.style.color = "white";

    
    if(asfname.value.length === 0 || aslname.value.length === 0){
        header2.innerText+=" missing First or Last name";
        errCnt++;
    };
    if(!validEmail(asemail.value)){
        semicolon = (errCnt>0)? "; " : " ";
        header2.innerText+=semicolon +"Email not valid";
        errCnt++;
    };
    if(aspassword.value.length === 0 || asrepassword.value.length === 0 || 
        aspassword.value !== asrepassword.value){
            semicolon = (errCnt>0)? "; " : " ";
            header2.innerText+=semicolon +"Password mismatch ";
            errCnt++;   

    };
    if(errCnt>0){
        header2.style.color = "red";
        return;
    };

    // No errors - then change User account Settings in localStorage
    let hashpass1 = hash(aspassword.value);
    changeUser(asfname.value,aslname.value,asemail.value,hashpass1);
    lufname = asfname.value;
    lulname = aslname.value;
    luemail = asemail.value;
    lupassword = hashpass1;
        
    stage = 3;
    console.log("stage = " + stageName[stage]);
    createHtml(stage);
    displayTodoLists("todolistsul");
}

function AccSettingsCancel(){
 
    stage = 3;
    console.log("stage = " + stageName[stage]);
    createHtml(stage);   
    displayTodoLists("todolistsul");
}

function getUserList(listname){
    let resList = -1;
    for(var list of lutodolists){
        if(list.listname === listname){
            resList = list;
            break;
        }
    }
    return resList; 
}

function addElementToUserList(listname,el){
    for(var list of lutodolists){
        if(list.listname === listname){
            let objListItem = {"el": el, "checked": false};
            list.items.push(objListItem);
            changeUserTodolists(lufname,lulname,luemail,lupassword,lutodolists);
            backsavelist = false; // Todo form button text -> save
            changeTodoFormButton(backsavelist);
            break;
        }
    }
}

function newButtonText(){
    backsavelist = false; // Todo form button text -> save
    changeTodoFormButton(backsavelist);
}

function backOrSaveTodoList(){
    // Save to localStorage if items checked status changed
    if(!backsavelist){
        var curListName = document.getElementById("h3-listname").innerText;
        saveTodoList(curListName);
    }

    stage = 3;
    console.log("stage = " + stageName[stage]);
    createHtml(stage);   
    displayTodoLists("todolistsul");
}

function changeTodoFormButton(backorsave){
    let text = (backorsave)?"Back":"Save";
    buttonBackOrSaveList.innerText = text;
}

function saveTodoList(listname){
    for(var list of lutodolists){
        if(list.listname === listname){

            var ul = document.getElementById("todolistul");
            var ulItems = ul.getElementsByTagName("li");

            for (var i = 0; i < ulItems.length; ++i) {
                console.log(ulItems[i].id);
                list.items[i].checked = (ulItems[i].id === "true")?true:false;
            }

            changeUserTodolists(lufname,lulname,luemail,lupassword,lutodolists);
        }
    }
}

function renameUserList(oldListName,newListName){
    for(var list of lutodolists){
        if(list.listname === oldListName){
            list.listname = newListName;
            changeUserTodolists(lufname,lulname,luemail,lupassword,lutodolists);
            backsavelist = false; // Todo form button text -> save
            changeTodoFormButton(backsavelist);
            break;
        }
    }
}

// header => input => new header
function editTodoListName(ev){
    const el = ev.target;
    const previous = ev.target;
    const input = document.createElement("input");
    input.setAttribute("value", el.textContent);
    input.setAttribute("class","input-dash-100");
    input.addEventListener("keyup",newButtonText); // change button to save on keyup
    //input.setAttribute("style","margin:5px");
    el.replaceWith(input);
  
    const save = function() {

        if (input.value === '' || getUserList(input.value) !== -1) {
            alert("You must enter new unique To-Do List name!");
        } else {
            backsavelist = false; // Todo form button text -> save
            changeTodoFormButton(backsavelist);
            renameUserList(previous.innerText,input.value);
            previous.textContent = input.value;
        }       
        input.replaceWith(previous);
    };
  
    /**
      Defining the callback with `once`, because the element will be gone just after that, 
      and we don't want any callbacks leftovers take memory. 
      Next time `H3` turns into `input` this single callback 
      will be applied again.
    */
    input.addEventListener('blur', save, {
      once: true,
    });
    input.focus();
}

// init
// show/hide form variables
let firstForm = document.getElementById("first-form" );
let signUpForm = document.getElementById("signup-form" );
let logInForm = document.getElementById("login-form" );
let dashboardForm = document.getElementById("dashboard-form" );
// let toDoForm = document.getElementById("todo-form" );
let accSettingsForm = document.getElementById("account-settings-form" );

// button and other elements
//let buttonSignUp = document.getElementById("signup");
//let buttonLogIn = document.getElementById("login");
// let buttonSignUpForm = document.getElementById("signupform");
// let buttonLogInForm = document.getElementById("loginform");
// let buttonAccSettings = document.getElementById("accSettingsBtn");
// let buttonLogOut = document.getElementById("logOutBtn");
// let buttonAccSettingsSave = document.getElementById("accsettingssave");
// let buttonAccSettingsCancel = document.getElementById("accsettingscancel");
// let buttonNewTodoList = document.getElementById("newtodolist");
// let buttonNewListItem = document.getElementById("newlistitem");
// let buttonBackOrSaveList = document.getElementById("backsavelist");
// let editableListName = document.getElementById("h3-listname");
// let buttonBackFromLogin = document.getElementById("backfromlogin");

// add event listeners
// buttonSignUp.addEventListener("click",signUpClicked);
// buttonLogIn.addEventListener("click",logInClicked);
// buttonSignUpForm.addEventListener("click",signUpFormClicked);
// buttonLogInForm.addEventListener("click",logInFormClicked);
//buttonAccSettings.addEventListener("click",changeAccSettings);
// document.querySelectorAll(".accSettingsBtn").forEach(item => {
//   item.addEventListener("click", changeAccSettings)
// });
// //buttonLogOut.addEventListener("click",logOut);
// document.querySelectorAll(".logOutBtn").forEach(item => {
//   item.addEventListener("click", logOut)
// });

// buttonAccSettingsSave.addEventListener("click",AccSettingsSave);
// buttonAccSettingsCancel.addEventListener("click",AccSettingsCancel);
// buttonNewTodoList.addEventListener("click",newToDoList);
// buttonNewListItem.addEventListener("click",newListItem);
// buttonBackOrSaveList.addEventListener("click",backOrSaveTodoList);
// toDoForm.addEventListener("click",toggleLiChecked,false);
// editableListName.addEventListener("click",editTodoListName);
// buttonBackFromLogin.addEventListener("click",backFromLoginClicked);

// logged user data
let lufname,lulname,luemail,lupassword;
let lutodolists = []; 
//back or savelist status for button on Todo form
let backsavelist = true; // true -> back button , false -> savelist button

// remove users
//removeUser("emarinova@gmail.com");
//removeUser("john.d@example.org");
//removeUser("anna.s@example.org");

// check localStorage entries
console.log(getUser("emarinova@gmail.com"));    //Em1234567*
console.log(getUser("julian.gyuroff@gmail.com"));
console.log(getUser("john.d@example.org"));     //Jd1234567*
console.log(getUser("anna.s@example.org"));     //1
console.log(getUser("peter.j@example.org"));

