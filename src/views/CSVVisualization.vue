<template>
  <div id="csv-view">
    <OpenFile id="open-file" @openFile="handleCSV"/>
    <Table id="csv-table" ref="csvTable"/>
  </div>
</template>

<script>
import OpenFile from '../components/OpenFile'
import Table from '../components/Table'

export default {
  name: "CSVVisualization",
  components: {
    OpenFile, Table
  },
  data() {
    return {
    }
  },
  methods: {
    handleCSV(data) {
      console.log(data)
      this.$refs.csvTable.fillData(data)
    }
  }
}
</script>

<style scoped>
#csv-view{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100px 1fr;
}

#open-file {
  align-self: center;
  justify-self: center;
}

#csv-table {
  align-self: center;
  justify-self: center;
}
</style>