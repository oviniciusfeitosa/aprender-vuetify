<template>
  <v-container>
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
    <v-textarea
        name="input-7-1"
        box
        label="Descrição"
        auto-grow
        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    ></v-textarea>
    <v-flex xs12 sm6 md4>
      <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          lazy
          full-width
          width="290px"
      >
        <v-text-field
            slot="activator"
            v-model="date"
            label="Picker in dialog"
            prepend-icon="event"
            readonly
        ></v-text-field>
        <v-date-picker v-model="date" scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
  </v-container>
</template>

<script>

  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Cadastro',
    data () {
      return {
        name: 'teste',
        nameRules: [true],
        email: 'email',
        emailRules: [true],
        date: '2018-03-02',
        desc: '',
        modal: false
      }
    },
    methods: {
      ...mapActions({ getUsuario: 'usuario/usuario' }),
      salvar () {
        const params = {
          name: this.name,
          email: this.email
        }
        this.getUsuario(params)
      },
      allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0
    },
    mounted () {
      this.getUsuario({ email: 'primeiro commit ao inicializar' })

    },
    computed: {

      ...mapGetters({ usuario2: 'usuario/obterUsuario' })
    }
  }
</script>
