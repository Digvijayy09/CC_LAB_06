function addExpense() {
    const expenseName = document.getElementById("expense-name").value;
    const expenseAmount = document.getElementById("expense-amount").value;

    if (expenseName === "" || expenseAmount === "") {
        alert("Please fill out all fields.");
        return;
    }

    db.collection("expenses").add({
        name: expenseName,
        amount: parseFloat(expenseAmount),
        user: auth.currentUser.uid,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert("Expense added!");
        document.getElementById("expense-name").value = "";
        document.getElementById("expense-amount").value = "";
        loadExpenses();
    })
    .catch(error => console.error("Error adding expense:", error));
}

function loadExpenses() {
    document.getElementById("expense-list").innerHTML = "";
    db.collection("expenses")
        .where("user", "==", auth.currentUser.uid)
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => {
            snapshot.docs.forEach(doc => {
                const expense = doc.data();
                const li = document.createElement("li");
                li.textContent = `${expense.name}: ₹${expense.amount}`;
                document.getElementById("expense-list").appendChild(li);
            });
        });
}

auth.onAuthStateChanged(user => {
    if (user) {
        loadExpenses();
    }
});
