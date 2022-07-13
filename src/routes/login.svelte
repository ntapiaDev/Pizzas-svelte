<script>
    import API from "../services/Api";
    import { auth } from "../stores/auth.js"
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    let email = '',
        password = '',
        error = '';

    const handleForm = async () => {
        if(email !== '' && password !== '') {

            //Form valid, let's log the user !
            try {
                const response = await API.post("/user/login", {
                    email,
                    password
                });
                if(response.code !== 200) {
                    error = response.message;
                } else {
                    //Log the user here
                    $auth = {email, "token": response.access_token}

                    if($page.url.pathname !== "/cart" ) {
                        goto("/")
                    }
                }
            } catch (error) {
                console.error(error);
            }

        } else {
            error = 'Please enter a valid email and password.';
            return;
        }
    }
</script>

<h1 class="text-center m-5">Login page</h1>
<form on:submit|preventDefault={handleForm}>
    {@html error ? "<p class='alert alert-danger'>" + error + "</p>" : ""}
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            bind:value={email}
        />
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            bind:value={password}
        />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
