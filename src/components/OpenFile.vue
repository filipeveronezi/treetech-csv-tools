<template>
  <div id="open-file">
    <div id="file-container">
      <span id="file-name" placeholder="">
        {{ fileName }}
      </span>
      <label for="choose-file" id="btn-file">Importar</label>
    </div>
    <file-reader accept=".csv" output="binary" @reader-load="openFile">
      <template #reader="props">
        <input
          type="file"
          :accept="props.accept"
          @change="props.onchange"
          id="choose-file"
          name="choose-file"
        />
      </template>
    </file-reader>
  </div>
</template>

<script>
import FileReader from "vue-filereader"
import csvtojson from "csvtojson"
import { headerFull, headerTrimmed } from "../assets/header"

export default {
  components: {
    FileReader,
  },
  data() {
    return {
      fileName: "Clique em 'Importar' para selecionar um arquivo",
    };
  },
  methods: {
    async openFile(file) {
      this.fileName = file.file.name;

      console.log(file.data)

      const header = file.data.split("\n")[0];

      if (this.checkHeader(header)) {
        let data = file.data.replace(header, headerTrimmed.join(";"))

        data = await csvtojson({
          delimiter: ";",
        }).fromString(data);

        this.$emit("openFile", data);
      } else {
        console.log("Invalid file")
      }
    },
    checkHeader(header) {
      if (header != headerFull.join(";")) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style>
#open-file {
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
}

#file-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

#file-name {
  background: #f6f6f6;
  height: 35px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 15px;
  border-radius: 20px 0 0 20px;
  color: #b1b1b1;
  cursor: not-allowed;
}

#btn-file {
  background: #008241;
  border-radius: 0 20px 20px 0;
  height: 35px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  margin: 0;
}

#btn-file:hover {
  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
}

#choose-file {
  display: none;
}
</style>
