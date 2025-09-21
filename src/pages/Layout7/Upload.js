import React from "react";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { Button, Upload, message } from "antd";
import "./UploadFile.css";

const props = {
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  listType: "picture",
  beforeUpload(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = document.createElement("img");
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
          ctx.textBaseline = "middle";
          ctx.font = "33px Arial";
          ctx.fillText("Ant Design", 20, 20);
          canvas.toBlob((result) => resolve(result));
        };
      };
    });
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadFile = () => (
  <div className="upload-container mb-3">
    <div className="upload-card">
      <Upload {...props} className="custom-upload">
        <div className="upload-content">
          <div className="upload-icon">
            <InboxOutlined />
          </div>
          <h3>Click or drag files to upload</h3>
          <p>Support for single or bulk upload</p>
          {/* <Button
            icon={<UploadOutlined />}
            size="large"
            type="primary"
            className="upload-button"
          >
            Select Files
          </Button> */}
        </div>
      </Upload>
    </div>
  </div>
);

export default UploadFile;
