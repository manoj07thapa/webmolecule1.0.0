const ImagePreview = ({ image }) => {
  return (
    <div>
      <span>ImagePriview</span>
      <div className="grid grid-cols-3 gap-3">
        {image.map((i, idx) => (
          <p key={idx}>{i.name}</p>
        ))}
      </div>
    </div>
  );
};
export default ImagePreview;
