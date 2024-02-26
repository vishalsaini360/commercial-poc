// import path from 'path';
// import fs from 'fs-extra';
// import archiver from 'archiver';

const path = require('path');
const fs = require('fs-extra');
const archiver = require('archiver');

// export default async function handler(req, res) {
  async function handler(req, res) {
  const { selectedFiles, parentDir, childDir } = req.body;
  const sourceFolder = path.join(process.cwd(), 'src', 'Components', 'LayoutStructure', parentDir, childDir);
  console.log('sourceFoldersourceFolder', sourceFolder);
  try {
    // Ensure the source folder exists
    if (!fs.existsSync(sourceFolder)) {
      return res.status(400).json({ error: 'Source folder does not exist' });
    }

    // Create a dynamic destination folder based on timestamp
    const timestamp = new Date().getTime();
    const timestampFolderName = `${parentDir}_${childDir}_${selectedFiles[0]}`;
    const dynamicDestinationFolder = path.join(process.cwd(), 'public', 'download-files', `${timestampFolderName}`);

    // Remove existing destination folder if it exists
    if (fs.existsSync(dynamicDestinationFolder)) {
      fs.removeSync(dynamicDestinationFolder);
    }

    // Create the dynamic destination folder
    fs.ensureDirSync(dynamicDestinationFolder);

    // Copy selected files
    selectedFiles.forEach((file) => {
      const sourcePath = path.join(sourceFolder, file);
      const destinationPath = path.join(dynamicDestinationFolder, file);

      fs.copySync(sourcePath, destinationPath);
      console.log(`Copied file ${file} to ${destinationPath}`);
    });

    // Create a zip archive for the dynamic destination folder
    const zipFilePath = path.join(process.cwd(), 'public', 'download-files', `${timestampFolderName}.zip`);
    const output = fs.createWriteStream(zipFilePath);
    const archive = archiver('zip');

    archive.pipe(output);
    archive.directory(dynamicDestinationFolder, false);
    await archive.finalize();

    console.log(`Zip file created at ${zipFilePath}`);

    // Read the zip file into memory
    const zipFileData = fs.readFileSync(zipFilePath);

    // Set response headers for download
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename=${timestampFolderName}.zip`);

    // Send the zip file data as the response
    res.end(zipFileData);

    // Cleanup: Remove the temporary files
    fs.removeSync(dynamicDestinationFolder);
    // fs.removeSync(zipFilePath);

    console.log('Temporary files removed');

    res.status(200).json({ success: true, dynamicDestinationFolder, zipFilePath });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = handler;