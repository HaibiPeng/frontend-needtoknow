/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
<template>
  <div>
    <!-- <GoBack /> -->
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards" id="experience">
        <div
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card"
        >
          <router-link
            :to="{
              name: 'ExperienceDetails',
              params: { experienceSlug: experience.slug },
              hash: '#experience',
            }"
          >
            <img
              :src="require(`@/assets/${experience.image}`)"
              alt="experience.name"
            />
            <span class="card__text">
              {{ experience.name }}
            </span>
          </router-link>
        </div>
      </div>
      <transition name="slide" mode="out-in">
        <router-view :key="$router.path" />
      </transition>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";
import GoBack from "@/components/GoBack.vue";

@Component({
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  components: {
    GoBack: GoBack,
  },
  data() {
    return {
      //destinationId: this.$route.params.id as string,
      //slug: this.$route.params.slug as string,
    };
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) =>
          (destination as Record<string, unknown>).slug ==
          (this as unknown as Record<string, unknown>).slug
      );
    },
  },
})
export default class DestinationDetails extends Vue {}
</script>
<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}

.experiences {
  padding: 40px 0;
}

.destination-details {
  display: flex;
  justify-content: space-between;
}

p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}

.cards {
  display: flex;
  justify-content: space-between;
}

.cards img {
  max-height: 200px;
}

.card {
  padding: 0 20px;
  position: relative;
}

.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
