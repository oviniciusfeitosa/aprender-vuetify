<template>
    <v-container
            grid-list-xl
            fluid>
        Olar

        <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="10"
                label="Nome"
                required
        ></v-text-field>
        <v-text-field
                v-model="email"
                :rules="emailRules"
                :counter="10"
                label="E-mail"
                required
        ></v-text-field>
    </v-container>
</template>

<script>
  export default {
    name: 'Entrar',
    data () {
      return {
        nameRules: [
          true
        ],
        name: '',
        emailRules: [
          true
        ],
        email: ''
      }
    }
  }
</script>
