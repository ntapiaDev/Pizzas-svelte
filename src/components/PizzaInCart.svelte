<script>
    export let pizza;

    let quantity = pizza.quantity
</script>

<tr>
    <td><img src={pizza.image} alt={pizza.name} class="w-100" /></td>
    <td>{pizza.name}</td>
    <td>{pizza.description}</td>
    <td>{pizza.varient} ({pizza.price}€)</td>
    <!-- <td><AiOutlinePlus className="text-success pointer" onClick={() => handlePizza(1, props.pizza.name, props.pizza.varient)} /> {quantity} <AiOutlineMinus className="text-danger pointer" onClick={() => handlePizza(-1, props.pizza.name, props.pizza.varient)} /></td> -->
    <td>{quantity}</td>
    <td>{quantity * pizza.price}€</td>
</tr>