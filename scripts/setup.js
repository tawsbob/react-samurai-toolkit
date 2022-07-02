import configs   from './config.json';
import fs        from "fs";

async function createFolder(folderPath){
    try {
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath)
          return true
        }
      } catch (err) {
        console.error(err)
        return false
      }
}

async function createFile(folderPath){
    try {
        fs.writeFileSync(folderPath, '');
      } catch (err) {
        console.error(err)
        return false
      }
}

//remember to switch to custom config file
const { structure } = configs;

const isJsFile = /\.ts|\.js/;

structure.forEach((path)=>{
    isJsFile.test(path) ? 
    createFile(path) : 
    createFolder(path)
})
