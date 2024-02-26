import React from "react";
import axios from "axios";
import Heading from "./Heading";

export default function PageHeaderIcon({ title, children ,figmaLink, theme }) {
  const apiPath =
    theme === "light" ? "/api/downloadLightIcon" : "/api/downloadDarkIcon";

  const handleDownload = async () => {
    try {
      const response = await axios.get(apiPath, {
        responseType: "blob", // Set the response type as a blob
      });

      // Create a link element and trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${theme === "light" ? 'Light-Icons.zip' : 'Dark-Icons.zip'}`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading icons:", error);
    }
  };

  return (
    <div
      className="d-flex align-items-center page-header page-header-sticky"
      id="page-header"
    >
      <Heading title={title} />
      <a onClick={handleDownload} className="btn btn-primary ms-auto">
        Download More
      </a>
      <a
        href={figmaLink}
        className={`btn btn-outline-primary ms-4 ${children ? "me-4" : ""}  `}
        target="_blank"
      >
        Editable Figma File
      </a>
      {children}
    </div>
  );
}
