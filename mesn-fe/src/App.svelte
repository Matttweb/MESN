<script>
  import "smelte/src/tailwind.css";
  import { Router, Route } from "svelte-navigator";
  import SignUp from "./views/auth/SignUp.svelte";
  import SignIn from "./views/auth/SignIn.svelte";
  import Products from "./views/product/Products.svelte";
  import Orders from './views/order/Orders.svelte';
  import MakeOrder from './views/order/MakeOrder.svelte';
</script>

<Router primary={false}>
  <Route path="/">
    <SignUp />
  </Route>
  <Route path="/signup">
    <SignUp />
  </Route>
  <Route path="/signin">
    <SignIn />
  </Route>
  <Route path="/products">
    <Products />
  </Route>
  <Route path="/orders">
    <Orders/>
  </Route>
  <Route path="/make-order">
    <MakeOrder/>
  </Route>
</Router>
