<script setup lang="ts">
import { defineEmits } from "vue";
import type { ActionType } from "@/types/NekomanginiType";

const { links } = defineProps<{
  links: ActionType[];
}>();

const emit = defineEmits<{
  (e: "action-click", label: string, url: string): void;
}>();

const handleActionClick = (label: string, url: string) => {
  emit("action-click", label, url);
};
</script>

<template>
  <div id="btn-links">
    <ul>
      <li v-for="link in links" :key="link.label">
        <a
          :href="link.url"
          @click.prevent="handleActionClick(link.label, link.url)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path :d="link.svgPath" />
          </svg>
          <span class="btn-label">{{ link.label }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#btn-links {
  color: white;
  padding: 5px;
}

#btn-links ul {
  list-style: none;
  margin: 0;
  /* removes default padding value */
  padding-inline-start: 0;
}

#btn-links a {
  background-image: linear-gradient(
    243deg,
    #8c8c8c 0%,
    rgba(61, 61, 61, 1) 74%
  );
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  margin: 10px;
  border-radius: 7px;
  color: white;
}

#btn-links a:hover {
  transform: scale(0.95);
  transition: all 0.3s ease-in-out;
  color: #bdbdbd;
}

#btn-links li a svg {
  height: 30px;
  width: 30px;
  margin-right: 20px;
  fill: #bdbdbd;
}

/* Animations */
/* Apply animation correctly to ul > li elements */
#btn-links li {
  opacity: 0;
  transform: translateY(-20px);
  animation: fallIn 0.7s ease-out forwards;
}

/* Stagger effect for each item */
#btn-links li:nth-child(1) {
  animation-delay: 0.1s;
}

#btn-links li:nth-child(2) {
  animation-delay: 0.3s;
}

#btn-links li:nth-child(3) {
  animation-delay: 0.6s;
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
</style>
