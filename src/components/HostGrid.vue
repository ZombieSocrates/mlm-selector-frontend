<template>
  <div>
    <h1>Who's gonna host MLM on {{ nextHostDate }}?!?!</h1>
    <h2>Showing {{ numDisplay }} of {{ hostCount }} candidates </h2>
    <ul v-for="cand in sampleHosts" :key="cand.id">
        <b>{{ cand.name }}???</b>
    </ul>
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
      sampleHosts: []
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
    tableRows: function () {
      return Math.floor(Math.sqrt(this.numDisplay))
    },
    tableCols: function () {
      return Math.ceil(this.numDisplay / this.tableRows)
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: left;
  font-family: 'Comic Sans MS';
}

ul {
  list-style-type: none;
  font-family: 'Comic Sans MS';
  text-align: left;
  padding: 0;
}
</style>
