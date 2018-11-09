<template>
  <v-container>
    <v-data-table
        :headers="headers"
        :items="obterEventos"
        hide-actions
        class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.date }}</td>
        <td>{{ props.item.desc }}</td>
        <td align="center">
          <v-dialog v-model="dialog" persistent max-width="600px">

            <v-btn slot="activator" flat color="primary">Editar</v-btn>
            <v-card>
              <v-card-title>
                <span class="headline">Eventos</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <FormularioCadastro></FormularioCadastro>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-btn flat color="danger" @click="">Remover</v-btn>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>

  import FormularioCadastro from '../components/FormularioCadastro'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Eventos',
    data () {
      return {
        headers: [
          {
            text: 'Nome',
            align: 'center',
            sortable: true,
            value: 'name'
          },
          { text: 'Data', value: 'date' },
          { text: 'Descrição', value: 'fat' },
          { text: 'Ações', value: 'acoes' ,sortable: false, align: 'center'},
        ]
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
    mounted () {
      this.getEventos({ name: 'lerolero', date: 'lerolero', desc: 'lerolero' })

    },
    computed: {
      ...mapGetters({ obterEventos: 'eventos/obterEventos' })
    },
    components: {
      FormularioCadastro
    }
  }
</script>
