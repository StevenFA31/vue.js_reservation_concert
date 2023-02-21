<script lang="ts">
import axios from "axios";
import { routeLocationKey } from "vue-router";

export default {
  data() {
    return {
      list: [],

      event: null,
      limage: null,
    };
  },

  async mounted() {
    try {
      const eventId = this.$route.params.id;
      console.log("eventID:", eventId);
      let result = await axios.get(
        "http://localhost:1337/api/events?populate=artists,artists.picture&filters[id]=" +
          eventId
      );
      this.list = result.data.data;
    } catch (error) {
      console.error(error);
    }
  },
};

</script>

<template>
  <div v-for="list2 in list">
    <div class="titleSubmit">
      <h1>{{ list2.attributes.title }}</h1>
      <router-link :to="{ name: 'formulaire', params: { id: list2.id } }"
        ><button type="button" class="btn btn-primary btnSubmit">
          Reserver ma place
        </button></router-link
      >
    </div>
    <ul>
      <div v-for="list3 in list2.attributes.artists.data">
        <h2>{{ list3.attributes.name }}</h2>
        <h3>Description :</h3>
        <br />
        <li>{{ list3.attributes.description }}</li>

        <div v-for="item in list3.attributes.picture.data">
          <img
            v-bind:src="
              'http://localhost:1337' + item.attributes.formats.medium.url
            "
            alt="image"
          />
        </div>
      </div>
    </ul>
  </div>
</template>

<style>
h1 {
  text-align: center;
}

.titleSubmit {
  display: flex;
  flex-direction: row;
}

.btnSubmit {
  background-color: none;
}
.btnSubmit:hover {
  background-color: none;
}
</style>
