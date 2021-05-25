<script>
  import { Snackbar } from "smelte";
  export let snackbar = { value: false, color: "", message: "" };
</script>

<Snackbar
  bind:value={snackbar.value}
  color={snackbar.color}
  right
  timeout={3000}>{snackbar.message}</Snackbar
>
