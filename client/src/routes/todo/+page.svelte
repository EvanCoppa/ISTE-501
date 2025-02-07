<script>
let go = 1;

function goForward() {
    go++;
}
</script>

<div >
    <button on:click={goForward}>Increment</button>
    {go}

</div>
  
