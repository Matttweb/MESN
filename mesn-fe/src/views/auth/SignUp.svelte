<script>
  import { Button, TextField } from "smelte";
  import Snackbar from '../../components/Snackbar.svelte';
  import Navbar from '../../components/Navbar.svelte';
  import * as auth from "../../api/auth";
  import { navigate } from 'svelte-navigator';

  let user = { name: "", email: "", password: "" };
  let nameError = false;
  let emailError = false;
  let passwordError = false;
  let formValid = true;
  let snackbar = {value: false, color: "", message: ""}

  async function signUp() {
    if (validateForm()) {
        try {
            const response = await auth.signUp(user);
            if (response.status == 400) {
                snackbar = {
                    value: true,
                    color: "error",
                    message: response.data.message
                };
            } else {
                localStorage.setItem("token", response);
                navigate("/products");
            }
        } catch (error) {
            console.log(error);
        }
    }
  }

  function validateForm() {
    formValid = true;
    validateName();
    validateEmail();
    validatePassword();
    return formValid;
  }

  function validateName() {
    if (user.name == "") {
      nameError = "Name is required";
      formValid = false;
    }
  }

  function validateEmail() {
    if (user.email == "") {
      emailError = "E-mail is required";
      formValid = false;
    } else if (!/.+@.+\..+/.test(user.email)) {
      emailError = "E-mail must be valid";
      formValid = false;
    }
  }

  function validatePassword() {
    if (user.password == "") {
      passwordError = "Password is required";
      formValid = false;
    }
  }
</script>

<svelte:head>
    <title>Sign Up</title>
</svelte:head>
<Navbar/>
<div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 p-8">
  <div class="col-span-1 sm:col-start-2 md:col-start-2">
    <div class="border-dotted border-2 border-gray-600 rounded p-8">
      <form on:submit|preventDefault={signUp}>
        <div class="mb-8">
          <TextField
            on:input={() => (nameError = false)}
            bind:value={user.name}
            error={nameError}
            append="account_circle"
            outlined
            label="Name"
          />
        </div>
        <div class="mb-8">
          <TextField
            on:input={() => (emailError = false)}
            bind:value={user.email}
            error={emailError}
            append="alternate_email"
            outlined
            label="E-mail"
          />
        </div>
        <div class="mb-8">
          <TextField
            on:input={() => (passwordError = false)}
            bind:value={user.password}
            error={passwordError}
            append="lock"
            outlined
            label="Password"
            type="password"
          />
        </div>
        <Button type="submit" block color="dark">Sign Up</Button>
      </form>
    </div>
  </div>
</div>

<Snackbar {snackbar}></Snackbar>