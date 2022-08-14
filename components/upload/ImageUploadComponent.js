import { useDropzone } from "react-dropzone";

const ImageUploadComponent = (props) => {
  const { setFieldValue } = props;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/jpeg": [], "image/png": [] },
    onDrop: (acceptedFiles) => {
      setFieldValue("files", acceptedFiles);
    },
  });
  return (
    <div>
      {}
      <div {...getRootProps({ className: "dropzone" })} className="text-white">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};
export default ImageUploadComponent;
