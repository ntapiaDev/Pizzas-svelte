<script>
    import { cart } from "../stores/cart.js"

    export let pizza;

    let size = "small";
    let quantity = 1;

    const addToCart = () => {
        let oldCart = JSON.parse($cart);

        let added = false;
        oldCart.forEach(oldPizza => {
            if(oldPizza.name === pizza.name && oldPizza.varient === size) {
                oldPizza.quantity = parseInt(oldPizza.quantity) + parseInt(quantity);
                added = true;
            }
        });

        if(!added) {
            let addedPizza = {'name' : pizza.name, 'varient' : size, 'quantity' : quantity, 'image' : pizza.image, 'price' : pizza.prices[0][size], 'description' : pizza.description, 'id' : pizza._id};
            oldCart = [...oldCart, addedPizza];
        }

        $cart = JSON.stringify(oldCart);
    }

</script>

<article class="col-4 text-center mb-5">
    
    <div class="card" style="width: 18rem;">
        <img src={pizza.image} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{pizza.name}</h5>
            <div class="row">
                <div class="col-6">
                    <h6>
                        Taille :
                        <select bind:value={size}>
                            {#each pizza.varients as varient}
                                <option value={varient}>{varient}</option>
                            {/each}
                        </select>
                    </h6>
                </div>
                <div class="col-6">
                    <h6>
                        Quantité :<br />
                        <select bind:value={quantity}>
                            {#each [...Array(10).keys()] as i}
                                <option value={i + 1}>{i + 1}</option>
                            {/each}
                        </select>
                    </h6>
                </div>
            </div>
            <div class="row">
                <div class="col-5">
                    Prix : {pizza.prices[0][size] * quantity}€
                </div>
                <div class="col-7">
                    <button class="bg-warning text-light" on:click={addToCart}>Add</button>
                    <button class="bg-success text-light ms-3" data-bs-toggle="modal" data-bs-target={"#" + pizza.name.replace(/ /g, "")}>Show</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div
        class="modal fade"
        id={pizza.name.replace(/ /g, "")}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        {pizza.name}
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>
                <div class="modal-body">
                    <img src={pizza.image} alt={pizza.name} class="img-fluid"/>
                    <h6 class='mt-3'>Description</h6>
                    <p>{pizza.description}</p>
                </div>
            </div>
        </div>
    </div>

</article>
