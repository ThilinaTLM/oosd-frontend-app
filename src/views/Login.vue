<template>
  <div>
    <LoginForm title="User Login"/>
  </div>
</template>

<script>
  import CenterFormLayout from "../layouts/CenterFormLayout.vue";
  import LoginForm from "../components/LoginForm.vue";

  export default {
    name: 'Login',
    components: {
      LoginForm
    },
    created() {
      this.$emit('update:layout', CenterFormLayout )
    }
  }
</script>