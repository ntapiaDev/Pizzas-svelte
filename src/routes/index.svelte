<script>
    import API from "../services/Api";
    import { onMount } from "svelte";

    import Pizza from "../components/Pizza.svelte";

    let pizzas = [];

    onMount(async () => {
        try {
            const response = await API.get("/pizza");
            pizzas = response;
        } catch (error) {
            console.error(error);
        }
    });
    
</script>

<section class="container m-4">

    <h1 class="text-center m-4">Welcome to Pizza-Land !</h1>
        
    <div class="row">
        {#each pizzas as pizza }
            <Pizza {pizza} />
        {/each}
    </div>
    
</section>
