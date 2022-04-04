let dishes = ['Pizza Margherita', 'Pizza PROSCIUTTO', 'Pizza Funghi', 'Pizza MARINARA', 'Pizza Tono', 'Pizza Mista'];
let prices = [6.50, 8.50, 9.50, 11.50, 9.50, 8.50];
let ingredients = ['Tomatensauce, Mozzarella, Basilikum', 'Hinterschinken, Käse', 'Hinterschinken, frische Egerlinge, Käse', 'Meeresfrüchte, Käse, Knoblauch', 'Thunfisch, Zwiebeln, Käse', 'Schinken, Salami und Champignons'];

let dishesToCart = [];
let pricesToCart = [];
let ingredientsToCart = [];
let amountToCart = [];


function renderDishesAndCart() {
    let renderEatBox = document.getElementById('renderEatBox')
    for (let i = 0; i < dishes.length; i++) {
        const dishe = dishes[i];
        const price = prices[i];
        const Ingredient = ingredients[i];
        renderEatBox.innerHTML += /*html*/ `
          <div class="eatBox">
                    <h4>${dishe}</h4>
                    <p>${Ingredient}</p>

                    <div class="addItem">
                        <button onclick="addItemToCart(${i})" type="button" class="btn btn-secondary">+</button>
                        <button onclick="deleteItemFromCart(${i})" type="button" class="btn btn-secondary">-</button>
                    </div>
                    <p>${price}€</p>
                </div>
    `;
    }
    renderShoppingCart();
}


function renderShoppingCart() {
    let shoppingCart = document.getElementById('shoppingCartDishes');
    if (dishesToCart.length == 0) {
        shoppingCart.innerHTML += /*html*/ `
        <div id="fillYourShoppingCart">
            <img src="img/cart-2-64.png" alt="">
            <h3>Fülle deinen Warenkorb</h3>
            <p>Füge leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
        </div>
        `;
    } else if (dishesToCart.length > 1) {
        shoppingCart.innerHTML += "";
    } else {
        for (let i = 0; i < dishesToCart.length; i++) {
            const dishe = dishesToCart[i];
            const price = pricesToCart[i];
            const Ingredient = ingredientsToCart[i];
            const amountIndex = amountToCart[i];
            shoppingCart.innerHTML += /*html*/ `  
            <div >
               <h3>${dishe}</h3>
               <p>${Ingredient}</p>
               <p>${price}€</p>
            </div>

            <div class="addItem">
                <p>${amountIndex} Stück</p>
                <button onclick="addItemToCart(${i})" type="button" class="btn btn-secondary">+</button>
                <button onclick="deleteItemFromCart(${i})" type="button" class="btn btn-secondary">-</button>
            </div>
           `;
        }
    }
}


function addItemToCart(i) {
    let index = dishesToCart.indexOf(dishes[i]);

    if (index == -1) {
        dishesToCart.push(dishes[i]);
        pricesToCart.push(prices[i]);
        ingredientsToCart.push(ingredients[i]);
        amountToCart.push(1);

    } else {
        amountToCart[index]++;
    }
    renderShoppingCart();
}

function deleteItemFromCart(i) {

    if (dishesToCart >= 1) {
        dishesToCart[i]--;
    } else {
        dishesToCart.splice(i, 1);
        pricesToCart.splice(i, 1);
        ingredientsToCart.splice(i, 1);
        amountToCart.splice(i, 1);
    }
    renderShoppingCart();
}