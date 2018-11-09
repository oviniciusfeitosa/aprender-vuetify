<template>
  <v-container>
    <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Nome"
        required
    ></v-text-field>
    <v-textarea
        v-model="desc"
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
      <v-btn color="info" @click="salvar()">Cadastrar</v-btn>
    </v-flex>
    <Eventos></Eventos>
  </v-container>
</template>

<script>

  import { mapActions, mapGetters } from 'vuex'
  import Eventos from './Eventos'

  export default {
    name: 'Cadastro',
    components: { Eventos },
    data () {
      return {
        name: 'teste',
        nameRules: [true],
        date: '2018-03-02',
        desc: '',
        modal: false
      }
    },
    methods: {
      ...mapActions({ getEventos: 'eventos/eventos' }),
      salvar () {
        const params = { name: this.name, date: this.date, desc: this.desc }
        this.getEventos(params)
      },
      allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0
    },
    // mounted () {
    //   this.getEventos({ name: 'lerolero', date: 'lerolero', desc: 'lerolero' })
    //
    // }
    components: {
      Eventos
    }
  }
</script>
