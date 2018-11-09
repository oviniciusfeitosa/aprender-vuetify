<template>
  <v-container
      grid-list-xl
      fluid>
    Olar {{usuario2.name}}

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
    <v-btn color="success" @click="salvar()">Entrar</v-btn>
  </v-container>
</template>

<script>

  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Entrar',
    data () {
      return {
        nameRules: [true],
        name: 'teste',
        emailRules: [true],
        email: 'teste@testando.com'
      }
    },
    methods: {
      ...mapActions({getUsuario: 'usuario/usuario'}),
      salvar() {
        const params = {
          name: this.name,
          email: this.email
        }
        this.getUsuario(params)
      }
    },
    mounted() {
      this.getUsuario({ email: 'primeiro commit ao inicializar' })

    },
    computed: {

      ...mapGetters({usuario2: 'usuario/obterUsuario'})
    }
  }
</script>
