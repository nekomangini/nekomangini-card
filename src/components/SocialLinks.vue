<script setup lang="ts">
import { defineEmits } from "vue";
import type { SocialLink } from "@/types/NekomanginiType";

const props = defineProps<{
  links: SocialLink[];
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
    <li v-for="link in props.links" :key="link.platform">
      <a :href="link.url" @click.prevent="handleSocialClick(link.platform, link.url)" :aria-label="link.label">
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
</style>
