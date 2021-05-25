<script>
  import { onMount } from "svelte";
  import { getOrders } from "../../api/order";
  import { Card, Button } from "smelte";
  import { apiURL, isLoggedIn } from "../../store";
  import Navbar from '../../components/Navbar.svelte';

  let ordersList = [];

  onMount(async () => {
    isLoggedIn();
    try {
      ordersList = await getOrders();
      for (let order of ordersList) {
        var date = new Date(order.date),
          day = ("0" + date.getDate()).slice(-2),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          hor = ("0" + date.getHours()).slice(-2),
          min = ("0" + date.getMinutes()).slice(-2);
        order.date = [
          day,
          "-",
          mnth,
          "-",
          date.getFullYear(),
          " at ",
          hor,
          ":",
          min,
        ].join("");
      }
    } catch (error) {
      console.log(error);
    }
  });
</script>

<svelte:head>
  <title>Orders</title>
</svelte:head>
<Navbar/>
<h3 class="ml-12 font-serif">My Orders</h3>
<div class="grid grid-cols-2 md:grid-cols-6 gap-4 m-12">
  {#each ordersList as { date, file }}
    <Card.Card>
      <div class="m-3">{date}</div>
      <Button on:click={() => window.open($apiURL + file)} color="dark"
        >details</Button
      >
    </Card.Card>
  {/each}
</div>
