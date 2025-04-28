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
</style>
