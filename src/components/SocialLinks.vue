<script setup lang="ts">
import { defineEmits } from "vue";
import type { SocialType } from "@/types/NekomanginiType";

const { links } = defineProps<{
  links: SocialType[];
}>();

const emit = defineEmits<{
  (e: "social-click", platform: string, url: string): void;
}>();

const handleSocialClick = (platform: string, url: string) => {
  emit("social-click", platform, url);
};
</script>

<template>
  <ul class="social-links">
    <li v-for="link in links" :key="link.platform">
      <a
        :href="link.url"
        @click.prevent="handleSocialClick(link.platform, link.url)"
        :aria-label="link.label"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path :d="link.svgPath" />
        </svg>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.social-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.social-links {
  list-style-type: none;
  padding: 10px;
}

.social-links a {
  background: rgba(61, 61, 61, 0.5);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  height: 50px;
  width: 50px;
  border-radius: 10px;
}

.social-links a:hover {
  background: rgba(148, 148, 148, 1);
  transform: scale(0.85);
  transition: all 0.3s ease-in-out;
}

.social-links svg {
  height: 30px;
  width: 30px;
  fill: #bdbdbd;
}

/* Animations */
.social-links li {
  opacity: 0;
  /* transform: translateY(-50px); */
  animation: fallIn 0.7s ease-out forwards;
}

@keyframes fallIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Add stagger effect */
.social-links li:nth-child(1) {
  animation-delay: 0.1s;
}

.social-links li:nth-child(2) {
  animation-delay: 0.2s;
}

.social-links li:nth-child(3) {
  animation-delay: 0.3s;
}

.social-links li:nth-child(4) {
  animation-delay: 0.4s;
}
</style>
