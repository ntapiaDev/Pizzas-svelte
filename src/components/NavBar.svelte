<script>
    import { auth } from "../stores/auth.js"
    import { cart } from "../stores/cart.js"
</script>

<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/"><img src="/images/White_pizza-logo.jpg" alt="Logo Pizza Delicious" style="width: 15%"></a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/"
                        >Home</a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="cart">Cart ({JSON.parse($cart).length})</a>
                </li>
                {#if $auth === null}
                    <li class="nav-item">
                        <a class="nav-link" href="login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="register">Register</a>
                    </li>
                {:else}
                    <li class="nav-item">
                        <span class="nav-link" role='button' on:click={() => $auth = null}>Log Out ({$auth.email})</span>
                    </li>
                {/if}
            </ul>
        </div>
    </div>
</nav>
