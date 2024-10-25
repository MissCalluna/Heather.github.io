const cartItems = document.getElementById('cart-items');

const totalPriceElement = document.getElementById('total-price');

let totalPrice = 0;


document.querySelectorAll('.add-to-cart').forEach(button => {

    button.addEventListener('click', (event) => {

        const product = event.target.parentElement;

        const productName = product.getAttribute('data-name');

        const productPrice = parseFloat(product.getAttribute('data-price'));


        addToCart(productName, productPrice);

    });

});




function addToCart(name, price) {

    const listItem = document.createElement('li');

    listItem.textContent = `${name} - $${price}`;

    cartItems.appendChild(listItem);


    totalPrice += price;

    totalPriceElement.textContent = `Total: $${totalPrice}`;

}


<script>

    document.getElementById("view-details").addEventListener("click", function() {

        document.getElementById("product-details-modal").classList.toggle("show");

  });

</script>

