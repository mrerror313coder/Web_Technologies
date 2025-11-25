let isloggedin = true, isAdmin = true;

if (isloggedin && isAdmin) {
    console.log("Logined in as Admin");
}

isloggedin = false;

if (isloggedin || isAdmin) {
    console.log("Hi Admin");
}

if (!isloggedin) {
    console.log("You can Login");
}