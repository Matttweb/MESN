<script>
  import { onMount } from "svelte";
  import { TextField, Button } from "smelte";
  import { getProducts } from "../../api/product";
  import { createOrder } from "../../api/order";
  import Snackbar from "../../components/Snackbar.svelte";
  import Navbar from "../../components/Navbar.svelte";
  import { isLoggedIn } from "../../store";

  let myProducts = [];
  let productToSearch = "";
  let order = { products: [], total: 0 };
  let snackbar = {};

  onMount(async () => {
    isLoggedIn();
    try {
      myProducts = await getProducts();
    } catch (error) {
      console.log(error);
    }
  });

  function addTorOrder(product) {
    if (!order.products.includes(product)) {
      product.quantity = 1;
      product.amount = product.quantity * product.uprice;
      order.products = [...order.products, product];
    }
  }

  function removeFromOrder(index) {
    let tempOrder = order.products.slice(0);
    tempOrder.splice(index, 1);
    order.products = tempOrder;
  }

  async function makeOrder() {
    const response = await createOrder(order);
    order = { products: [], total: 0 };
    snackbar = {
      value: true,
      color: "success",
      message: response.message,
    };
  }

  $: searchResult = myProducts.filter((product) =>
    product.name.includes(productToSearch)
  );

  $: {
    let sum = 0;
    for (let product of order.products) {
      if (isNaN(product.amount)) product.amount = 0;
      sum += product.amount;
    }
    order.total = Number(sum.toFixed(2));
  }
</script>

<svelte:head>
  <title>Making a order</title>
</svelte:head>
<Navbar />
<h3 class="ml-12 font-serif">Make an order</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12 p-8">
  <div class="col-span-1">
    <TextField
      bind:value={productToSearch}
      label="Search"
      prepend="search"
      dense
    />
    <table class="table-fixed">
      <thead>
        <tr>
          <th class="w-1/2">Product</th>
          <th class="w-1/2">Unit price</th>
          <th class="w-1/6">Add</th>
        </tr>
      </thead>
      <tbody>
        {#each searchResult as product}
          <tr>
            <td class="border px-4 py-2">{product.name}</td>
            <td class="border px-4 py-2">{product.uprice}</td>
            <td class="border px-4 py-2">
              <Button
                on:click={() => addTorOrder(product)}
                color="dark"
                icon="add_shopping_cart"
                small
                text
              />
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <div class="col-span-1">
    <h5 class="mb-4 font-bold">Order :</h5>
    <form on:submit|preventDefault={makeOrder}>
      <table class="table-fixed">
        <thead>
          <tr>
            <th class="w-1/2 px-4 py-2">Product</th>
            <th class="w-1/6 px-4 py-2">Quantity</th>
            <th class="w-1/4 px-4 py-2">Unit price</th>
            <th class="w-1/4 px-4 py-2">Amount</th>
            <th class="w-1/6 px-4 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {#each order.products as { name, quantity, uprice, amount }, index}
            <tr>
              <td class="border px-4 py-2">{name}</td>
              <td class="border px-4 py-2">
                <input
                  bind:value={quantity}
                  on:input={() =>
                    (amount = Number((quantity * uprice).toFixed(2)))}
                  type="number"
                  min="1"
                  required
                  class="w-1/2"
                />
              </td>
              <td class="border px-4 py-2">{uprice}</td>
              <td class="border px-4 py-2">{amount}</td>
              <td class="border px-4 py-2">
                <Button
                  on:click={() => removeFromOrder(index)}
                  color="error"
                  icon="remove_shopping_cart"
                  small
                  text
                />
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
      <div class="m-10 grid grid-cols-2">
        <p><b>Total: </b>{order.total}</p>
        <Button type="submit" class="m-auto" color="dark">generate</Button>
      </div>
    </form>
  </div>
</div>
<Snackbar {snackbar} />
