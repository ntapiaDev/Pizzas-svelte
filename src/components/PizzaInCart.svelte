<script>
    import { cart } from "../stores/cart.js"
    export let pizza;

    const handleClick = (val, name, size) => {
        let oldCart = JSON.parse($cart);

        oldCart.forEach(pizza => {
            if(pizza.name === name && pizza.varient === size) {
                pizza.quantity = parseInt(pizza.quantity) + parseInt(val);
                if(pizza.quantity <= 0 || val === 0) {
                    oldCart.splice(oldCart.indexOf(pizza), 1)
                }
            }
        });

        $cart = JSON.stringify(oldCart);
    }

</script>

<tr>
    <td><img src={pizza.image} alt={pizza.name} class="w-100" /></td>
    <td>{pizza.name}</td>
    <td>{pizza.description}</td>
    <td>{pizza.varient} ({pizza.price}€)</td>
    <td>{pizza.quantity}<span class="fa-solid fa-plus" on:click={() => handleClick(1, pizza.name, pizza.varient)}></span><span class="fa-solid fa-minus" on:click={() => handleClick(-1, pizza.name, pizza.varient)}></span><span class="fa-solid fa-trash-can" on:click={() => handleClick(0, pizza.name, pizza.varient)}></span></td>
    <td>{pizza.quantity * pizza.price}€</td>
</tr>

<style>
    span {
        padding: .1em;
        cursor: pointer;
    }
    span:nth-child(1) {
        color: green;
    }
    span:nth-child(2) {
        color: red;
    }
    span:nth-child(3) {
        color: orange;
    }
</style>