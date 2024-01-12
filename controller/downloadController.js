import Download from "../model/downloadModel.js"

export const uploadFile = async(req, res) =>{
    try {

        const {filename, path} = req.file;
        const fileData = new Download({filename, filePath: path});
        const savedFile = await fileData.save();
        if(!savedFile){
            return res.status(400).json({message: "File not uploaded"})
        }
        return res.status(200).json(savedFile)

    } catch (error){
        res.status(500).json({error: error})
    }
}

export const downloadFile = async(req, res) =>{
    try {

        const {filename} = req.params;

        const fileExist = await Download.findOne({filename});

        if(!fileExist){
            return res.status(404).json({message: "File not found"})
        }

        res.download(fileExist.filePath, fileExist.filename);

    } catch (error) {
        res.status(500).json({error: error})
    }
}