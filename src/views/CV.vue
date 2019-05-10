<template>
  <div class="cv">
    <Navbar />
    <CVContent />
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";
import CVContent from "@/components/cv/CVContent";

export default {
  name: "CV",
  components: {
    Navbar,
    CVContent
  }
}
</script>
