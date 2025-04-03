function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Signup successful!");
            showExpenseTracker();
        })
        .catch(error => alert(error.message));
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Login successful!");
            showExpenseTracker();
        })
        .catch(error => alert(error.message));
}

function logout() {
    auth.signOut().then(() => {
        alert("Logged out!");
        document.getElementById("tracker-section").style.display = "none";
        document.getElementById("auth-section").style.display = "block";
    });
}

auth.onAuthStateChanged(user => {
    if (user) {
        showExpenseTracker();
    } else {
        document.getElementById("tracker-section").style.display = "none";
        document.getElementById("auth-section").style.display = "block";
    }
});

function showExpenseTracker() {
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("tracker-section").style.display = "block";
}
