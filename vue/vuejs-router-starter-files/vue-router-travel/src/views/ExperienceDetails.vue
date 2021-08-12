<template>
  <section>
    <h2>{{ experience.name }}</h2>
    <div class="experience details">
      <img
        :src="require(`@/assets/${experience.image}`)"
        :alt="experience.name"
      />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";

@Component({
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceSlug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) =>
          (destination as Record<string, unknown>).slug ===
          (this as unknown as Record<string, unknown>).slug
      );
    },
    experience() {
      return (this as any).destination.experiences.find(
        (experience: Record<string, unknown>): boolean =>
          experience.slug ===
          (this as unknown as Record<string, unknown>).experienceSlug
      );
    },
  },
})
export default class ExperienceDetails extends Vue {}
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.experience-details {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>
