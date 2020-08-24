<template>
    <div>
        <v-btn v-if="authenticated" to="/dashboard" small color="success">DASHBOARD</v-btn>
        <v-btn v-else to="/login" small color="success">LOGIN</v-btn>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "LoginButton",
        computed: {
            ...mapState('user', ['authenticated'])
        }
    }
</script>

<style scoped>

</style>