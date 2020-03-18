<template>
  <div>
    <h1>Who's gonna host MLM on {{ nextHostDate }}?!?!</h1>
    <div v-if=candidateSelected>
      <div class=modal-mask>
        <div class=modal-container>
          <div class=modal-header>
            Ladies and gentlemen, the Next Host of ChIDEO MLM is...
          </div>
          <div class=modal-body>
            {{ candidateSelected.name }} !!!
          </div>
          <div class=modal-footer>
            <button id=submit-host-button @click="submitHostForMLM()">Put 'em in the books!</button>
            <button id=pick-another-button @click="chooseHostForMLM()">Pick someone else!</button>
          </div>
        </div>
      </div>
    </div>
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
      hostList: [],
      nextHostDate: '',
      sampleHosts: [],
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
    },
    submitHostForMLM: function () {
      const postData = {
        WeekOfHosting: this.nextHostDate,
        hostID: this.candidateSelected.id,
        hostName: this.candidateSelected.name
      }
      console.log(JSON.stringify(postData))
      this.exitModal()
    },
    exitModal: function () {
      this.sampleHosts = this.sampleCandidates(this.hostList)
      this.candidateSelected = null
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
  font-family: Comic Sans MS;
}

h2 {
  text-align: left;
  font-family: Comic Sans MS;
}

table {
  margin: auto;
}

td {
  list-style-type: none;
  font-family: Comic Sans MS;
  text-align: center;
  padding: 10px;
}

button {
  font-family: Comic Sans MS;
  color: white;
  border-style: outset;
  border-radius: 8px;
}

#choose-host-button {
  display: inline-block;
  background-color: #be03fc;
  min-height: 50px;
  margin-top: 2em;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

/*.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}*/

.modal-container {
  width: 300px;
  margin: 50px auto;
  padding: 33px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Comic Sans MS;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

#pick-another-button {
  float: right;
  background-color: #C71585;
}

#submit-host-button {
  float: left;
  background-color: #42b983;
}
</style>
