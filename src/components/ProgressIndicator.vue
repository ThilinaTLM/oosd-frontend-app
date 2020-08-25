<template>
    <div class="text-center ">
      <v-progress-circular
        :indeterminate="indeterminate"
        rotate=0
        size=64
        :value="value"
        width=6
        :color="color"
      >{{ value }}</v-progress-circular>
    </div>
</template>

<script>
  export default {
      name:"ProgressIndicator",
    data: () => ({
      value: value,
      color:color,
      indeterminate:false
    }),
    props:['value','color']
  }
</script>