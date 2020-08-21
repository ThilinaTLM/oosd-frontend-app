<template>
        <img alt="Home" @click="$router.push('/')" src="@/assets/gov-logo.svg" class="logo" height="100%" />
</template>

<script>
    export default {
        name: "HomeButton"
    }
</script>

<style scoped>
    .logo {
        cursor: pointer;
        height: 80%;
        margin: 5px;
        box-shadow: #ffff87ff 0 0 5px;
        border: solid 1px #fff200;
        border-radius: 50%;
        transition: all 200ms;
    }

    .logo:hover {
        box-shadow: #FFFF87ff 0 0 20px;
    }

</style>