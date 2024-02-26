import React from "react";
import Heading from "./Heading";
import Button from "./Button";

export default function PageHeader({title, children,buttonTitle,downloadLink,figmaLink}) {
  return (
    <div className="d-flex align-items-center page-header page-header-sticky" id="page-header">
      <Heading title={title} />
      <Button target="_blank" href={`/pdf/${downloadLink}`} className="btn btn-primary ms-auto">
        {/* {buttonTitle} */}
        Download PDF
      </Button>
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
