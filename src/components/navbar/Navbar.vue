<template>
  <div class="navbar">
    <nav class="indigo darken-2">
      <div class="nav-wrapper">
        <router-link :to="{ name: 'home' }">
          <span class="brand-logo">Profile</span>
        </router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link :to="{ name: 'cv' }">CV</router-link></li>
          <li><router-link :to="{ name: 'portfolio' }">Portfolio</router-link></li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
      </div>
    </nav>

    <ul id="slide-out" class="sidenav">
        <router-link :to="{ name: 'cv' }">
          <li>CV</li>
        </router-link>
        <router-link :to="{ name: 'portfolio' }">
          <li>Portfolio</li>
        </router-link>
    </ul>

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

<style>
</style>