export const headerFull = [
  "UUID",
  "Teste automático",
  "Modo",
  "Tratamento",
  "Tabela (Modbus)",
  "Tipo (Modbus)",
  "Registrador (Modbus)",
  "Tipo (DNP3)",
  "Índice (DNP3)",
  "Limite inferior",
  "Limite superior",
  "Valor default",
  "Divisor",
  "Unidade pt",
  "Unidade en",
  "Unidade es",
  "Conversão pt",
  "Conversão en",
  "Conversão es",
  "Opcional",
  "Condicional",
  "Nível de acesso",
  "Descrição pt",
  "Descrição en",
  "Descrição es",
  "Mnemônico",
  "Display pt",
  "Display en",
  "Display es",
  "Observações",
  "Funcionalidade",
  "Grupo",
  "Classificação",
  "Gráfico rápido",
  "Histórico de dados",
  "IEC 61850",
  "Link (Middleware)",
  "CDC",
]

export let headerTrimmed = shorten(headerFull)

function shorten(array) {
  let newArray = []
  array.forEach((value, index) => {
    let newStr = "";
    newStr = value
      .toLowerCase()
      .replace(" ", "")
      .replace(" ", "")
      .replace("á", "a")
      .replace("ô", "o")
      .replace("ó", "o")
      .replace("ç", "c")
      .replace("ã", "a")
      .replace("õ", "o")
      .replace("(", "")
      .replace(")", "")
      .replace("í", "i")
      .trim();
    newArray[index] = newStr
  })
  return newArray
}