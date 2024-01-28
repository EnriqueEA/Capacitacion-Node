const { utils } = require("./utilidades")
const path = require("path")
const fs = require("fs/promises");

async function main() {
   // writeFile("file01.txt", "hello world");
   // readFile("file01.txt")
   // console.log("Terminado");

   const res = await fs.stat(path.join(__dirname, "files", "file01.txt"))

   console.log(res, res.isDirectory());
}

const writeFile = async (filename, data) => {
   const filePath = path.join(__dirname, "files", filename)
   console.log(filePath);
   fs.appendFile(filePath, data);
   console.log("Archivo listo.");
}

const readFile = async (filename) => {
   const filePath = path.join(__dirname, "files", filename);
   const data = await fs.readFile(filePath, { encoding: "utf8" })
   console.log(data);
}

main();
