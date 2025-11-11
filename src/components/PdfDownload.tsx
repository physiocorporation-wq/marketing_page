import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = { label: string,pdf:any }

const PdfDownload: React.FC<Props> = (props) => {
  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = props.pdf;
    link.download = "MyFile.pdf"; // <-- The name it will be saved as
    link.click();
  };
  return (
    <div>
      <button
        onClick={() => {
          handleDownload();
        }}
        className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-700 group"
      >
        {props.label}
      </button>
    </div>
  );
}


export default PdfDownload
