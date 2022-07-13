<script>
    import API from "../services/Api";
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';
    let repeat = '';
    let checked = false;

    const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,24}$/;

    let error = '';

    $: errorEmail = email.length > 0 && !EMAIL_REGEX.test(email) ? 'Please enter a correct email' : '';
    $: errorPassword = password.length > 0 && !PWD_REGEX.test(password) ? 'Your password must be at least 6 caracters, with at least one letter and one number.' : '';
    $: errorRepeat = password !== repeat ? 'Password and repeated password dont match.' : '';

    const handleForm = async () => {
        if((email !== '' && errorEmail === '') &&
            (password !== '' && errorPassword === '') &&
            (repeat !== '' && errorRepeat === '') &&
            checked)
        {
            //Form valid, let's add the user to the database !
            try {
                const response = await API.post("/user/adduser", {
                    "email" : email,
                    "password" : password
                });
                if(response.code !== 200) {
                    error = response.message;
                } else {
                    goto("/login");
                }
            } catch (error) {
                console.error(error);
            }

        } else {
            error = 'Please enter a valid email and password and check the box.';
            return;
        }
    }
</script>

<h1 class="text-center m-5">Register page</h1>
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
    {@html errorEmail ? "<p class='alert alert-danger'>" + errorEmail + "</p>" : ""}
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            bind:value={password}
        />
    </div>
    {@html errorPassword ? "<p class='alert alert-danger'>" + errorPassword + "</p>" : ""}
    <div class="mb-3">
        <label for="exampleInputPassword2" class="form-label"
            >Confirm your password</label
        >
        <input
            type="password"
            class="form-control"
            id="exampleInputPassword2"
            bind:value={repeat}
        />
    </div>
    {@html errorRepeat ? "<p class='alert alert-danger'>" + errorRepeat + "</p>" : ""}
    <div class="mb-3 form-check">
        <input 
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1" 
            bind:checked={checked}
        />
        <label class="form-check-label" for="exampleCheck1"
            >I agree everything you want.</label
        >
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
