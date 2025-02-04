import React from "react";
import { useRef, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { ImageConfig } from "./ImageConfig";
import PropTypes from "prop-types";
import papka from "../images/visa-addfolder.svg";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState(props.files ? props.files : []);
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    console.log("newFile", newFile);
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
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
        className="w-full bg-[#FCFCFC]  outline-none py-[26px] rounded-md border-dashed border-[#b0adad] hover:border-blue border-2 flex justify-center flex-col items-center hover:text-blue my-auto relative"
      >
        <div className="flex items-center justify-center gap-2">
          <img src={papka} alt="papka" />
          <span className="text-[#878787] text-[16px] font-[poppins-medium] ">
            Faýl ýükle
          </span>
        </div>
        <input
          type="file"
          value=""
          // onClick={onFileDrop}
          onChange={onFileDrop}
          className="absolute opacity-0 w-full h-full cursor-pointer"
        />
      </div>
      {fileList.length > 0 ? (
        <div className="mt-12 w-full">
          {fileList.map((item, index, size) => (
            <div key={index}>
              <div className="relative flex mb-2.5 bg-gray/10 p-4 rounded-xl w-full justify-between">
                <div className="flex">
                  <img
                    src={
                      ImageConfig[item.type.split("/")[1]] ||
                      ImageConfig["default"]
                    }
                    alt="img"
                    width={40}
                    height={40}
                  />
                  <div className="ml-6">
                    <p className="text-[16px] font-[poppins-regular] ">
                      {item.name}
                    </p>
                    <span className="flex">
                      <p className="text-[16px] font-[poppins-regular]">
                        {item.size}&nbsp;b
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
