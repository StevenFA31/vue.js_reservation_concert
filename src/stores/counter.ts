
import { defineStore } from "pinia"



export const useCounterStore = defineStore({
  id:'form',
  state:() => ({
    firstname:'',
    lastname:'',
    email:'',
  }),
  actions: {
    addFormValues(firstname : string, lastname: string , email: string) {
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
    },
  },
});
