const xml2js = require('xml2js');
const fs = require('fs');
const FOLDER_NAME = "json-2010"

const createFile = (filePath, myContentJson) => {
    fs.writeFile(filePath, myContentJson, function(err) {
        if (err) throw err;
    });
}

const createFolder = (folderName) => {
    try {
        if (!fs.existsSync(folderName)) fs.mkdirSync(folderName);
    } catch (err) {
        console.error(err);
    }
}

const convertToJson = (xmlFile) => {
    let json;
    xml2js.parseString(xmlFile, (err, result) => {
        if (err) throw err;
        json = JSON.stringify(result, null, 4);
    });
    return json;
}

const parseFolder = () => {
    createFolder(FOLDER_NAME)
    const filenames = fs.readdirSync('./2010');

    filenames.forEach(file => {
        if (file.startsWith(".")) return;
        createFolder(`./${FOLDER_NAME}/${file}`);

        const subfilenames = fs.readdirSync(`./2010/${file}`);
        subfilenames.forEach(subfile => {
            const f = fs.readFileSync(`./2010/${file}/${subfile}`);
            const json = convertToJson(f);
            createFile(`./${FOLDER_NAME}/${file}/${subfile.split('.')[0]}.json`, json);
        });

    });
}

parseFolder()