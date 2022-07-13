<script>
    import { auth } from "../stores/auth.js"
    import { cart } from "../stores/cart.js"
    import PizzaInCart from "../components/PizzaInCart.svelte";
    import Login from "./login.svelte";

</script>

{#if $auth === null}
    <Login />
{:else}
    <div class="container">
        <h1 class='text-center mt-5'>My Cart</h1>
        <table class='text-center mt-5' striped bordered hover>
            <thead>
                <tr class='bg-warning'>
                    <th class='w-25'>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Varient</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {#each JSON.parse($cart) as pizza }
                    <PizzaInCart {pizza} />
                {/each}
                <tr>
                    <td colSpan={4}></td>
                    <td>Total :</td>
                    <td>€</td>
                </tr>
            </tbody>
        </table>
        <div class='d-flex justify-content-end'>
            <button class='alert alert-success'>Continue</button>
        </div>
    </div>
{/if}