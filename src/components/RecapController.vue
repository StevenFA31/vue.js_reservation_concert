<script lang="ts">

import axios from "axios";

import { defineComponent } from 'vue';
import { useCounterStore } from '@/stores/counter';

export default defineComponent({
  setup() {
    const formStore = useCounterStore();
    return { formStore };
  },
  data() {
    return {
      event: '',
      reservationConfirmed: false
    }
  },
  created() {
    // Récupérer les informations sur le festival à partir de l'API
    const eventId = this.$route.params.id;
    if (eventId) {
      this.getData(eventId);
    }
  },
  methods: {
    async getData(eventId) {
      const res = await fetch(`http://localhost:1337/api/events?populate=artists,artists.picture&filters[id]=${eventId}`);
      const finalRes = await res.json();
      this.event = finalRes.data[0].attributes.title;
    },
    async confirmReservation() {
      const reservation = {
        firstname: this.formStore.firstname,
        lastname: this.formStore.lastname,
        email: this.formStore.email,
        event: this.$route.params.id,
      }
      const data = {
        data: reservation
      }
      const response = await fetch('http://localhost:1337/api/reservations',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.reservationConfirmed = true;
      })
      .catch(error => console.error(error))
    },
  },
})

</script>

<template>
    <p class="card-text"><strong>Festival:</strong> {{ event }}</p>
      <p class="card-text"><strong>Prénom:</strong> {{ formStore.firstname || 'N/A' }}</p>
      <p class="card-text"><strong>Nom:</strong> {{ formStore.lastname || 'N/A' }}</p>
      <p class="card-text"><strong>Email:</strong> {{ formStore.email || 'N/A' }}</p>
      <button class="btn btn-primary" @click="confirmReservation">Confirmer</button>

    <div class="card-body" v-if="reservationConfirmed">
      <h2 class="card-title">Merci pour votre réservation !</h2>
      <p class="card-text">Un email de confirmation vous a été envoyé à {{ formStore.email }}.</p>
    </div>
</template>
