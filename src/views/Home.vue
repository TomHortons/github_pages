<template>
  <div class="home">
    <Navbar />
    Home
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar/Navbar.vue";

export default {
  name: "home",
  components: {
    Navbar
  }
};
</script>
