<script>
let go = 1;

function goForward() {
    go++;
}
</script>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button on:click={goForward}>Increment</button>
    {go}
</body>
</html>
