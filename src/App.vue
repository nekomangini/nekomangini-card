<script setup lang="ts">
import ProfileCard from "@/components/ProfileCard.vue";

ProfileCard;
</script>

<template>
  <div class="fade-in">
    <ProfileCard />
  </div>
</template>

<style scoped>
.fade-in {
  animation: fade-in 1.6s ease-in-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
