<template>
  <div class="navbar">
    <nav class="indigo darken-2">
      <div class="nav-wrapper">
        <router-link :to="{ name: 'home' }">
          <span class="brand-logo center">Profile</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import M from "materialize-css";

export default {
  name: "Navbar",
  mounted() {
    const sideNav = document.querySelector(".sidenav");
    this.sideNav = M.Sidenav.init(sideNav);
  }
};
</script>
