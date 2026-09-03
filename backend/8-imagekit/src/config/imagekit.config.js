const ImageKit = require("@imagekit/nodejs");

const storageInstance = new ImageKit({
  urlEndpoint: process.env.IK_URL,
  publicKey: process.env.IK_PUBLIC,
  privateKey: process.env.IK_PRIVATE,
});

const sendFiles = async (file, fileName) => {
  const obj = {
    file: file.toString("base64"),
    fileName: fileName,
    folder: "cohort3",
  };

  return await storageInstance.files.upload(obj);
};

module.exports = sendFiles;
