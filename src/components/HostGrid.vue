<template>
  <div>
    <h1>Who's gonna host MLM on {{ nextHostDate }}?!?!</h1>
    <h2>Showing {{ numDisplay }} of {{ hostCount }} candidates </h2>
    <span v-if=candidateSelected> WE GOT'EM!!!!</span>
    <table>
      <tr v-for="row in tableRows" :key="row">
        <td v-for="col in tableCols" :key="getDisplayIndex(row, col)" style="{ width: tdWidth }">
        {{ getDesignerName(row, col) }}
        </td>
      </tr>
    </table>
    <button id=choose-host-button @click="chooseHostForMLM()">Pick a ChIDEOer, any ChIDEOer...</button>
  </div>
</template>

<script>

export default {
  name: 'HostGrid',
  props: {
    numDisplay: {
      type: Number,
      default: 30
    }
  },
  data: function () {
    return {
      hostCount: 0,
      hostList: null,
      nextHostDate: '',
      sampleHosts: null,
      candidateSelected: null
    }
  },
  created: function () {
    const vm = this
    fetch('./.netlify/functions/mlm-candidates')
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        vm.hostCount = data.HostCount
        vm.hostList = data.HostList
        vm.nextHostDate = data.NextHostWeek
        vm.sampleHosts = vm.sampleCandidates(data.HostList)
      })
  },
  methods: {
    sampleCandidates: function (candidateArray) {
      const chosen = []
      const displayIndices = []
      while (chosen.length < this.numDisplay) {
        const randIndex = Math.floor(Math.random() * candidateArray.length)
        if (!displayIndices.includes(randIndex)) {
          displayIndices.push(randIndex)
          chosen.push(candidateArray[randIndex])
        }
      }
      return chosen
    },
    getDisplayIndex: function (row, col) {
      return (row - 1) * this.tableCols + (col - 1)
    },
    getDesignerName: function (row, col) {
      const designerToShow = this.sampleHosts[this.getDisplayIndex(row, col)]
      return designerToShow === undefined ? '' : designerToShow.name
    },
    chooseHostForMLM: function () {
      const choiceIndex = Math.floor(Math.random() * this.hostList.length)
      this.candidateSelected = this.hostList[choiceIndex]
      alert(`I CHOOSE YOU ${this.candidateSelected.name}!!!`)
    }
  },
  computed: {
    tableRows: function () {
      return Math.floor(Math.sqrt(this.numDisplay))
    },
    tableCols: function () {
      return Math.ceil(this.numDisplay / this.tableRows)
    },
    tdWidth: function () {
      const tdw = (100 / this.tableCols + 2)
      return `${tdw}%`
    }

  }
}
</script>

<style scoped>
h1 {
  text-align: left;
  font-family: 'Comic Sans MS';
}

h2 {
  text-align: left;
  font-family: 'Comic Sans MS';
}

table {
  margin: auto;
}

td {
  list-style-type: none;
  font-family: 'Comic Sans MS';
  text-align: center;
  padding: 10px;
}

#choose-host-button {
  display: inline-block;
  background-color: #be03fc;
  min-height: 50px;
  font-family: 'Comic Sans MS';
  color: white;
  border-style: outset;
  border-radius: 8px;
  margin-top: 2em;
}
</style>
