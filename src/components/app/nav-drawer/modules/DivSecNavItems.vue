<template>
  <div>
    <NavItem
            name="Add New"
            icon="mdi-file-plus"
            link="/app/complaint/for-div-review"
    />
  </div>
</template>

<script>
import NavItem from "../NavItem";

export default {
    name: "DivSecNavItems",
    components: {
        NavItem
    }
}
</script>

<style scoped>

</style>