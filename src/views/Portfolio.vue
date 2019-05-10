<template>
  <div class="portfolio">
    <Navbar />
    <h3 class="text-indigo darken-3">Visual Index</h3>
    <VisualIndex />
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";
import VisualIndex from "@/components/visual-index/VisualIndex";

export default {
  name: "Portfolio",
  components: {
    Navbar,
    VisualIndex
  }
}
</script>