import PropTypes from "prop-types";
import { toast } from "react-toastify";

const Toast = ({ type, message }) =>
  toast[type](
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1, fontSize: 15, padding: "8px 12px" }}>
        {message}
      </div>
    </div>
  );

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Toast.dismiss = toast.dismiss;

export default Toast;
