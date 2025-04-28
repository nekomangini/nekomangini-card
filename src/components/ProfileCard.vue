<script setup lang="ts">
import { ref } from "vue";
// Components
import SocialLinks from "./SocialLinks.vue";
import ActionLinks from "./ActionLinks.vue";
// Data
import { profileData, socialLinks, actionLinks } from "@/data/nekomanginiData";
// Types
import type {
  ProfileType,
  SocialType,
  ActionType,
} from "@/types/NekomanginiType";

// Reactive profile data
const profile = ref<ProfileType>(profileData);
const socialLinksData = ref<SocialType[]>(socialLinks);
const actionLinksData = ref<ActionType[]>(actionLinks);

// Event handlers
const handleSocialClick = (_platform: string, url: string): void => {
  // console.log(`Navigating to ${platform} social profile`);
  window.open(url, "_blank");
};

const handleActionClick = (_label: string, url: string): void => {
  // console.log(`Navigating to ${label} page`);
  window.open(url, "_blank");
};
</script>

<template>
  <div class="background-container">
    <div class="content-container">
      <div class="glass-container">
        <div class="social-media">
          <!-- Profile Avatar -->
          <img
            :src="profile.avatar"
            :alt="`${profile.name}'s avatar`"
            class="profile-avatar"
          />

          <!-- Social Media Links Component -->
          <SocialLinks
            :links="socialLinksData"
            @social-click="handleSocialClick"
          />
        </div>

        <hr />

        <!-- Profile Name and Title -->
        <h1>{{ profile.name }}</h1>
        <p class="profile-title">{{ profile.title }}</p>

        <hr />

        <!-- Action Links Component -->
        <ActionLinks
          :links="actionLinksData"
          @action-click="handleActionClick"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.background-container {
  min-height: 100vh;
  width: 100%;
  background-image: url("@/assets/bg-image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* centers the div */
.content-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass-container {
  width: 100%;
  max-width: 43rem;
  /* 512px */
  padding: 2rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.social-media {
  /* background: green; */
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  border-radius: 100%;
  height: 120px;
  width: 120px;
  object-fit: cover;
}

img:hover {
  transform: scale(0.9);
  transition: all 0.3s ease-in-out;
}

hr {
  margin: 21px;
  visibility: hidden;
}

h1,
p {
  margin: 0px;
  font-size: 1.2rem;
  color: black;
}

.profile-title {
  letter-spacing: 0.225rem;
  line-height: 1.75;
  font-weight: 400;
}

/* Ensure buttons have proper contrast against the blur background */
button {
  /* background: rgba(255, 255, 255, 0.1); */
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Media query for mobile devices */
@media screen and (max-width: 768px) {
  /* Ensure full width and remove potential horizontal scrolling */
  body,
  html {
    max-width: 100%;
    overflow-x: hidden;
  }

  .background-container {
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
    /* Change from fixed to scroll for mobile */
    padding: 0;
    margin: 0;
  }

  /* Ensure content container fills width and centers content */
  .content-container {
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Adjust glass container for mobile */
  .glass-container {
    width: calc(100% - 2rem);
    /* Full width minus padding */
    max-width: 100%;
    margin: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    /* Include padding in width calculation */
    border-radius: 0.5rem;
  }

  /* Prevent any potential horizontal overflow */
  * {
    max-width: 100%;
    box-sizing: border-box;
  }

  /* Modify social media section for mobile */
  .social-media {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  /* Adjust social media links layout */
  .social-media ul {
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    padding: 0;
  }

  /* Ensure SVGs and images are responsive */
  .social-media svg,
  img {
    max-width: 100%;
    height: auto;
  }

  /* Additional typography adjustments */
  h1,
  .profile-title {
    text-align: center;
    width: 100%;
  }

  /* Modify action buttons for mobile */
  #btn-links ul {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    padding: 0;
  }

  #btn-links a {
    width: 100%;
    margin: 0.5rem 0;
  }
}

/* Additional media query for very small screens */
@media screen and (max-width: 375px) {
  .glass-container {
    margin: 0.5rem;
    padding: 0.75rem;
  }
}
</style>
