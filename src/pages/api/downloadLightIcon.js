import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

export default async function handler(req, res) {
  const folderPath  = path.join(process.cwd(), 'public', 'icon', 'light'); // Path to your icon folder

  try {
    const zip = new JSZip();

    const addFolderToZip = (folderPath, zip) => {
      const files = fs.readdirSync(folderPath, { withFileTypes: true });

      files.forEach((file) => {
        const filePath = path.join(folderPath, file.name);

        if (file.isDirectory()) {
          const subFolder = zip.folder(file.name);
          addFolderToZip(filePath, subFolder);
        } else {
          const fileData = fs.readFileSync(filePath);
          zip.file(file.name, fileData);
        }
      });
    };

    addFolderToZip(folderPath, zip);

    const zipContent = await zip.generateAsync({ type: 'nodebuffer' });

    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename=Dark-Light.zip');
    res.end(zipContent);
  } catch (error) {
    console.error('Error creating zip:', error);
    res.status(500).json({ error: 'Unable to create zip file' });
  }
}