<template>
  <div id="csv-table">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      styleClass="vgt-table striped bordered"
    />
  </div>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import { headerFull, headerTrimmed } from "../assets/header";

export default {
  components: {
    VueGoodTable,
  },
  data() {
    return {
      columns: [],
      rows: [],
    };
  },
  methods: {
    fillHeader() {
      headerFull.forEach((value, index) => {
        this.columns[index] = {
          label: value,
          field: headerTrimmed[index],
          type: "String",
        };
      });
    },
    fillData(csvData) {
      csvData.forEach((value) => {
        this.rows.push(value);
      });
    },
  },
  created: function() {
    this.fillHeader();
  },
};
</script>

<style>
#csv-table {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
