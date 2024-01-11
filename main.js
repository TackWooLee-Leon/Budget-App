let budgetInput = document.getElementById("budget_input");
let expensesName = document.getElementById("expenses_name")
let expensesInput = document.getElementById("expenses_input");
const budgetBtn = document.getElementById("budget_btn");
const expensesBtn = document.getElementById("expenses_btn");
const budgetAmount = document.getElementById("budget_amount");
const expensesAmount = document.getElementById("expenses_amount");
const balanceAmount = document.getElementById("balance_amount");
const list = document.getElementById("list");


budgetBtn.addEventListener("click", () => {
    if(budgetAmount.value !== "" && 
    !isNaN(parseFloat(budgetInput.value)) &&
    parseFloat(budgetInput.value) > 0){
        budgetAmount.innerHTML = parseFloat(budgetInput.value);
        balanceAmount.innerHTML = parseFloat(budgetInput.value);
   }
});


expensesBtn.addEventListener("click", () => {
    if(expensesInput.value !== "" && 
    !isNaN(parseFloat(expensesInput.value)) && 
    parseFloat(expensesInput.value) > 0 && expensesName.value !== ""){
        expensesAmount.innerHTML = 
        parseFloat(expensesInput.value) + parseFloat(expensesAmount.innerHTML);
        balanceAmount.innerHTML = 
        parseFloat(budgetAmount.innerHTML) - parseFloat(expensesAmount.innerHTML);


        // Create a new list item and add it to the list
        let newItem = document.createElement("span");

        let expensesNameSpan = document.createElement("span");
        expensesNameSpan.classList.add("expenses_name_span");
        expensesNameSpan.innerHTML = expensesName.value;

        //Create a remove button 

        let removeBtn = document.createElement("button");
        removeBtn.setAttribute("id", "remove_btn");
        removeBtn.innerHTML = "Remove";
        removeBtn.addEventListener("click", () => {
            let parentNode = removeBtn.parentNode;
            
            list.removeChild(parentNode);

        //Subtracting the removed item's expense/number value from expensesAmount
        //It works because when event listener is triggered, the parentNode is identified, 
        //which makes the removed button identified as well, therefore we can subtract the correct
        //expense value from expenseAmount
            let expenseValueSpan = parentNode.querySelector(".expenses_value_span");
            let expenseValue = parseFloat(expenseValueSpan.innerHTML.slice(1));
            expensesAmount.innerHTML =
            parseFloat(expensesAmount.innerHTML) - expenseValue;

        //adding removed item's expense value to balaceAmount
            balanceAmount.innerHTML = 
            parseFloat(balanceAmount.innerHTML) + expenseValue;
        });



        let expensesValueSpan = document.createElement("span");
        expensesValueSpan.classList.add("expenses_value_span");
        expensesValueSpan.innerHTML = "$" + expensesInput.value;

       newItem.appendChild(expensesNameSpan);
       newItem.appendChild(expensesValueSpan);
       newItem.appendChild(removeBtn);


        list.appendChild(newItem);
    }
});



