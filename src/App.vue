<template>
  <div>
    <keep-alive>
      <component :is="layout">
        <router-view :layout.sync="layout"></router-view>
      </component>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    data: () => ({
      layout:"div" // blank layout
    })
  }

</script>

<style>
</style>
