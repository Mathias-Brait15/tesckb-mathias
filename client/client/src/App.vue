<script>
import { RouterView } from "vue-router";
import registerView from "./views/registerView.vue";

export default {
  name: "App",
  components: {
    registerView,
  },
};
</script>

<template>
  <RouterView />
</template>
