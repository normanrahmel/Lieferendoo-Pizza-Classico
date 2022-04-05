let dishes = ['Pizza Margherita', 'Pizza PROSCIUTTO', 'Pizza Funghi', 'Pizza MARINARA', 'Pizza Tono', 'Pizza Mista'];
let prices = [6.50, 8.50, 9.50, 11.50, 9.50, 8.50];
let ingredients = ['Tomatensauce, Mozzarella, Basilikum', 'Hinterschinken, Käse', 'Hinterschinken, frische Egerlinge, Käse', 'Meeresfrüchte, Käse, Knoblauch', 'Thunfisch, Zwiebeln, Käse', 'Schinken, Salami und Champignons'];

let dishesToCart = [];
let pricesToCart = [];
let ingredientsToCart = [];
let amountToCart = [];


function renderDishesAndCart(sum) {
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
                        <!--<button onclick="deleteItemFromCart(${i})" type="button" class="btn btn-secondary">-</button>-->
                    </div>
                    <p>${price.toFixed(2).replace('.', ',')}€</p>
                </div>
    `;
    }
    renderShoppingCart();
}


function renderShoppingCart() {
    let shoppingCart = document.getElementById('shoppingCartDishes');
    shoppingCart.innerHTML = "";
    if (dishesToCart.length == 0) {
        shoppingCart.innerHTML = /*html*/ `
        <div id="fillYourShoppingCart">
            <img src="img/cart-2-64.png" alt="">
            <h3>Fülle deinen Warenkorb</h3>
            <p>Füge leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p>
        </div>
        `;
    } else {
        for (let i = 0; i < dishesToCart.length; i++) {
            const dishe = dishesToCart[i];
            const price = pricesToCart[i];
            const Ingredient = ingredientsToCart[i];
            const amountIndex = amountToCart[i];
            shoppingCart.innerHTML += /*html*/ ` 
            <div id="total-price">
            
            </div> 
            <div >
               <h3>${dishe}</h3>
               <p>${Ingredient}</p>
               <p>${price.toFixed(2).replace('.', ',')}€</p>
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
    shoppingCartFinance();
}

function deleteItemFromCart(i) {

    if (amountToCart[i] > 1) {
        amountToCart[i]--;
    } else {
        dishesToCart.splice(i, 1);
        pricesToCart.splice(i, 1);
        ingredientsToCart.splice(i, 1);
        amountToCart.splice(i, 1);
    }
    renderShoppingCart();
    shoppingCartFinance();
}


function shoppingCartFinance() {
    let total = document.getElementById('total-price');
    let sum = 0;

    for (let i = 0; i < dishesToCart.length; i++) {
        sum += pricesToCart[i] * amountToCart[i];
        totalPrice = sum.toFixed(2).replace('.', ',');

        total.innerHTML = /*html*/ `   
        <h3>Gesamtkosten</h3>
        <h4>${totalPrice}€</h4>
        <h5>Für unsere <b>Kostenlose Lieferung</b> qualifiziert</h5>
        <button onclick="placeOrder()" class="btn" id="place-order">Bestellung Aufgeben</button>
        `;
    }
}

function placeOrder() {
    alert('Deine Bestellung kommt in 30-Minuten zu dir Nachhause. Bitte Bezahle in Bar.')
}