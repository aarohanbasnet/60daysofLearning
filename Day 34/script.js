const balanceEl = document.getElementById("balance");
const incomeAmountEl = document.getElementById("income-amount");
const expenseAmountEl = document.getElementById("expense-amount");
const transactionListEl = document.getElementById("transaction-list");
const transactionformEl = document.getElementById("transaction-form");
const descriptionEl = document.getElementById("description")
const amountEl = document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions")) || []; //JSON.parse() to get structured data instead of string

transactionformEl.addEventListener("submit", addTransaction);

function addTransaction(e){
    e.preventDefault(); //preventDefault prevents the default behaviour of the form that is when submitted it reloads the page

    //get form values

    const description = descriptionEl.value.trim();
    const amount = parseFloat(amountEl.value);

    transactions.push({
        id:Date.now(),
        description, //description : description
        amount 
    })

    localStorage.setItem("transactions", JSON.stringify(transactions));

    updateTransactionList();
    // updateSummary();
    transactionformEl.reset();
}

function updateTransactionList(){
    transactionListEl.innerHTML = "";
    const sortedTransactions = [...transactions].reverse();
    sortedTransactions.forEach((transaction)=>{
       const li =  createTransactionElement(transaction);
       transactionListEl.appendChild(li);
    })
}


function createTransactionElement(transaction){
    const li = document.createElement("li");
    li.classList.add("transaction");
    li.classList.add(transaction.amount > 0 ? "income" : "expense");
   
   
    //todo : update the amount formatting
    li.innerHTML = `<span>${transaction.description}</span>
                    <span>${transaction.amount}
                    <button class="delete-btn" onclick = "removeTransaction(${transaction.id})">X</button>
                    </span>`

                    return li;
}



