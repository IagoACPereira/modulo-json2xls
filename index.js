const json2xls = require("json2xls");
const fs = require("fs");

function converter(arrJson, nomeDoArquivo) {
  const xls = json2xls(arrJson);

  fs.writeFileSync(`./excel/${nomeDoArquivo}.xls`, xls, "binary");
}

converter();