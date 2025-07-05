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
        id: Date.now(),
        description, //description : description
        amount 
    });

    localStorage.setItem("transactions", JSON.stringify(transactions));

    updateTransactionList();
    updateSummary();
    transactionformEl.reset();
}

function updateTransactionList(){
    transactionListEl.innerHTML = "";

    const sortedTransactions = [...transactions].reverse();
    sortedTransactions.forEach((transaction)=>{
       const transactionEl  =  createTransactionElement(transaction);
       transactionListEl.appendChild(transactionEl);
    })
}


function createTransactionElement(transaction){
    const li = document.createElement("li");
    li.classList.add("transaction");
    li.classList.add(transaction.amount > 0 ? "income" : "expenses");
   
   
    //todo : update the amount formatting
    li.innerHTML = `<span>${transaction.description}</span>
                    <span>${formatCurrency(transaction.amount)}
                    <button class="delete-btn" onclick = "removeTransaction(${transaction.id})">x</button>
                    </span>`

                    return li;
}


function updateSummary(){
    //100, -50, 200 -200 => 0+ 100 -50 +200 reduce
    const balance = transactions.reduce((acc, transaction)=>acc + transaction.amount ,0);
    const income = transactions.filter(transaction => transaction.amount >0)
                    .reduce((acc, transaction)=>acc + transaction.amount ,0);

    const expenses = transactions.filter(transaction => transaction.amount < 0)
                    .reduce((acc, transaction)=>acc + transaction.amount ,0);


    //update UI
    balanceEl.textContent = formatCurrency(balance);
    incomeAmountEl.textContent = formatCurrency(income);
    expenseAmountEl.textContent = formatCurrency(expenses);
}


function formatCurrency(number){
    return new Intl.NumberFormat('en-IN',{
        style : "currency",
        currency : "NPR",
        maximumFractionDigits: 2,
    }).format(number);
}

function removeTransaction(id){
    //filter out the one we want to delete
    transactions = transactions.filter(transaction => transaction.id !==id)

    localStorage.setItem("transactions", JSON.stringify(transactions))

    updateTransactionList();
    updateSummary();


}

// intial render 
updateTransactionList();
updateSummary();
 


