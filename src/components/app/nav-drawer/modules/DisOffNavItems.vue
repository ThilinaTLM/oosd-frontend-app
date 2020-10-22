<template>
  <div>
    <NavItem
            name="Add New"
            icon="mdi-file-plus"
            link="/app/complaint/create-new"
    />
    <NavItem
            name="Draft"
            icon="mdi-file-document-edit"
            link="/app/complaint/drafts"
    />
    <NavItem
            name="Approved"
            icon="mdi-file-certificate"
            link=""
    />
    <NavItem
            name="Processed"
            icon="mdi-file-replace"
            link=""
    />
    <NavItem
            name="Reviewed"
            icon="mdi-file-check"
            link=""
    />
  </div>
</template>

<script>
import NavItem from "../NavItem";

export default {
    name: "DisOffNavItems",
    components: {
        NavItem
    }
}
</script>

<style scoped>

</style>