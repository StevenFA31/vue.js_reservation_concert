<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      list: [],
    };
  },

  async mounted() {
    let result = await axios.get("http://localhost:1337/api/events");
    this.list = result.data.data;
  },
};

</script>

<template>
  <div v-for="item in list">
    <router-link :to="{ name: 'festival', params: { id: item.id } }">{{
      item.attributes.title
    }}</router-link>
  </div>
</template>

<style></style>
