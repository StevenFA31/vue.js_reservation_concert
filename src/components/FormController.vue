<script lang="ts">
import axios from "axios";
import { useCounterStore } from '@/stores/counter'

export default {
  setup(){
    const formStore = useCounterStore();
    return { formStore }
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      eventId: this.$route.params.id
    }
  },
  methods: {
      submitForm() {
        const { firstname, lastname, email} = this
        this.formStore.addFormValues(firstname, lastname, email)
      },
    },
  }
</script>

<template>
    <h1>Formulaire de réservation</h1>
    <form class="row g-3 needs-validation" v-on:submit.prevent="submitForm" novalidate>
        <div class="col-md-4">
            <label for="validationCustom01" class="form-label">Prénom</label>
            <input type="text" class="form-control" id="validationCustom01" required v-model="firstname" />
            <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Nom</label>
            <input type="text" class="form-control" id="validationCustom02" required v-model="lastname" />
            <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-6">
            <label for="validationCustom03" class="form-label">Adresse mail</label>
            <input type="email" class="form-control" id="validationCustom03" required v-model="email" />
            <div class="invalid-feedback">Veuillez selectionnez une adresse mail</div>
        </div>
        <div class="col-12">
            <router-link :to="{ name: 'recap', params: { id: eventId } }">
                <button @click="submitForm" class="btn btn-primary" type="button">Valider</button>
            </router-link>
        </div>
    </form>
</template>

<style>
</style>
