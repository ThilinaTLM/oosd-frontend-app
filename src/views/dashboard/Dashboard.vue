<template>
    <DashboardLayout/>
</template>

<script>
    import DashboardLayout from "../../layouts/DashboardLayout";

    export default {
        name: 'Home',
        components: {
            DashboardLayout
        },
        created() {
            this.$emit('update:layout', DashboardLayout)
        }
    }
</script>