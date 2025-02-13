import React, { useRef, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { ImageConfig } from "./ImageConfig";
import PropTypes from "prop-types";
import papka from "../images/visa-addfolder.svg";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState(props.files || []);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = async (e) => {
    e.preventDefault(); // Prevent default drag behavior
    const newFiles = Array.from(e.target.files);
    for (const newFile of newFiles) {
      if (newFile) {
        if (newFile.size <= 10 * 1024 * 1024) {
          if (
            newFile.type.startsWith("image/") ||
            newFile.type.startsWith("application/pdf") ||
            newFile.type.startsWith("application/octet-stream")
          ) {
            try {
              await uploadFileInChunks(newFile);
              const updatedList = [...fileList, newFile];
              setFileList(updatedList);
              props.onFileChange(updatedList);
            } catch (error) {
              console.error("File upload failed:", error);
              alert(`File upload failed: ${error.message}`);
            }
          } else {
            alert("Invalid file type. Please upload images or PDFs.");
          }
        } else {
          alert("File size exceeds the limit (10MB).");
        }
      }
    }
  };

  const uploadFileInChunks = async (file, chunkSize = "1MB") => {
    const totalChunks = Math.ceil(file.size / chunkSize);
    let start = 0;

    for (let i = 0; i < totalChunks; i++) {
      const end = Math.min(start + chunkSize, file.size);
      const chunk = file.slice(start, end);

      try {
        const response = await uploadChunk(chunk, i, totalChunks, file.name);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Upload failed for chunk ${i + 1}: ${response.status} - ${errorText}`);
        }
        console.log(`Uploaded chunk ${i + 1} of ${totalChunks} for ${file.name}`);
      } catch (error) {
        console.error("Chunk upload error:", error);
        throw error;
      }

      start = end;
    }

    console.log(`Upload complete for ${file.name}!`);
  };

  const uploadChunk = async (chunk, chunkIndex, totalChunks, fileName) => {
    const formData = new FormData();
    formData.append('chunk', chunk, `${fileName}.part${chunkIndex}`);
    formData.append('chunkIndex', chunkIndex);
    formData.append('totalChunks', totalChunks);
    formData.append('fileName', fileName);

    return fetch('/upload', {
      method: 'POST',
      body: formData,
    });
  };

  const fileRemove = (file) => {
    const updatedList = fileList.filter((f) => f !== file);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className="w-full bg-[#FCFCFC] outline-none py-[26px] rounded-md border-dashed border-[#b0adad] hover:border-blue border-2 flex justify-center flex-col items-center hover:text-blue my-auto relative"
      >
        <div className="flex items-center justify-center gap-2">
          <img src={papka} alt="papka" />
          <span className="text-[#878787] text-[16px] font-[poppins-medium] ">
            Faýl ýükle
          </span>
        </div>
        <input
          type="file"
          multiple // Allow multiple file selection
          onChange={onFileDrop}
          className="absolute opacity-0 w-full h-full cursor-pointer"
        />
      </div>
      {fileList.length > 0 ? (
        <div className="mt-12 w-full">
          {fileList.map((item, index) => (
            <div key={index}>
              <div className="relative flex mb-2.5 bg-gray/10 p-4 rounded-xl w-full justify-between">
                <div className="flex">
                  <img
                    src={ImageConfig[item.type.split("/")[1]] || ImageConfig["default"]}
                    alt="img"
                    width={40}
                    height={40}
                  />
                  <div className="ml-6">
                    <p className="text-[16px] font-[poppins-regular] ">{item.name}</p>
                    <span className="flex">
                      <p className="text-[16px] font-[poppins-regular] ">
                        {Math.round(item.size / 1024)} KB {/* Display size in KB */}
                      </p>
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <span
                    className="my-auto cursor-pointer"
                    onClick={() => fileRemove(item)}
                  >
                    <VscChromeClose />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;