<script>
  import { AppBar, Button, Icon } from "smelte";
  import { Router, Link, navigate } from "svelte-navigator";

  let token = localStorage.getItem("token");

  function showMenu() {
    let menu = document.querySelector("#menu");
    menu.classList.toggle("hidden");
  }

  function signOut() {
    localStorage.clear();
    navigate("/", { replace: true });
  }
</script>

<div class="mb-20">
  <AppBar class="bg-dark-700 p-3 h-auto">
    <Router>
      <Link to="/products">
        <img src="favicon.png" alt="logo" class="h-12 w-auto inline" />
        <span class="text-xl text-white font-bold">MATTWEB</span>
      </Link>
      <Button on:click={showMenu} fab class="ml-auto lg:hidden"
        ><Icon color="white">menu</Icon></Button
      >
      <div
        class="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto lg:h-auto text-gray-400"
        id="menu"
      >
        <div class="flex text-center flex-col lg:flex-row lg:ml-auto lg:items-center">
          {#if token}
            <Link
              to="/products"
              class="inline-flex w-auto px-3 py-2 rounded justify-center hover:bg-gray-900"
              ><span>Products</span></Link
            >
            <Link
              to="/orders"
              class="inline-flex w-auto px-3 py-2 rounded justify-center hover:bg-gray-900"
              ><span>Orders</span></Link
            >
            <Link
              to="/make-order"
              class="inline-flex w-auto px-3 py-2 rounded justify-center hover:bg-gray-900"
              ><span>Make an order</span></Link
            >
            <Button on:click={signOut} color="gray" outlined small class="ml-3">
              sign out
            </Button>
          {:else}
            <Link
              to="/signin"
              class="inline-flex w-auto px-3 py-2 rounded justify-center hover:bg-gray-900"
              ><span>Sign in</span></Link
            >
            <Link
              to="/signup"
              class="inline-flex w-auto px-3 py-2 rounded justify-center hover:bg-gray-900"
              ><span>Sign up</span></Link
            >
          {/if}
        </div>
      </div>
    </Router>
  </AppBar>
</div>
