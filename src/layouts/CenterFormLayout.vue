<template>
    <v-app>

            <v-btn
                    absolute
                    top
                    left
                    rounded
                    align="left"
                    color="primary"
                    @click="$router.push({path: '/'})"
                    @mouseover="homeButtonExpand = true"
                    @mouseleave="homeButtonExpand = false"
            >
                <img
                        :src="require('@/assets/main-gov.png')"
                        height="30"
                        class="ma-1"
                />
                <h4 class="ma-1 black--text" >Home</h4>
            </v-btn>
        <v-container fill-height fluid class="lighten-3 grey">
            <v-row justify="center">
                <slot/>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: "CenterFormLayout"
    }
</script>

<style>
    html {
        overflow-y: hidden;
    }
</style>