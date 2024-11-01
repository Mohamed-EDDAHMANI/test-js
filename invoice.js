let counter = 1;
document.addEventListener('DOMContentLoaded', function () {

    // add initital total calculation first 
    //here

    // these are selection helpers
    const invoiceTable = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    const invoiceTotal = document.getElementById('invoiceTotal');



    // This function updates the total amount in each row ( item price * Qte )
    function updateItemTotal() {

        let quantity = document.getElementById("quantity").value;
        let prixUniter = document.getElementById("unitPrice").value;
        console.log(document.getElementById("quantity"))
        console.log(quantity)
        console.log(prixUniter)
        const totals = document.querySelectorAll(".itemTotal");
        totals.forEach(element => {
            element.innerHTML = quantity * prixUniter;

            console.log(element.innerHTML)
        });

    }
    document.addEventListener('input', () => {
        updateItemTotal()
    })


    // This function updates the total amount of the invoice (sum all Item totals)
    function updateInvoiceTotal() {

    }


    // Ajouter un nouveau item 
    function addNewItem() {

        const card = document.getElementById("card");
        HTML += `
        <tr>
                <td>Article ${counter}</td>
                <td><input type="number" class="quantity" id="quantity" min="0">${quantity}</td>
                <td><input type="number" class="unitPrice" id="unitPrice" min="0" step="0.01">${prixUniter}</td>
                <td class="itemTotal">${total}</td>
        </tr>
        `
        card.appendChild(HTML);


    }


    // If you finish the above functions, consider adding a delete button

});
function addNewItem() {


    const card = document.getElementById('card');
    card.innerHTML += `
    <tr id="card-item${counter}" >
            <td>Article ${counter}</td>
            <td><input type="number" class="quantity" id="quantity" min="0"></td>
            <td><input type="number" class="unitPrice" id="unitPrice" min="0" step="0.01"></td>
            <td class="itemTotal"></td>
    </tr>
    `;
    counter = counter + 1;
    console.log(document.getElementById('card'))
    // document.getElementById("card").appendChild(card);


}
