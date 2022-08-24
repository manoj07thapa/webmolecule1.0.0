import { Fragment } from "react";
import Footer from "../components/footer/Footer";
const Contact = () => {
  return (
    <Fragment>
      <div className="grid place-content-center mt-40 space-y-7">
        <h1 className=" text-gray-300 font-extrabold text-8xl tracking-widest">
          WebMolecule
        </h1>
        <h3 className=" text-gray-500 font-extrabold text-2xl tracking-widest text-center">
          Gatthaghar-3 , Bhaktapur, Nepal
        </h3>
        <div className="text-center text-gray-600 text-xl tracking-wide border-b border-pink-600 pb-24">
          <p>Email: support@webmolecule.com</p>
          <p>Phonenumber: 016631641, 9863715907</p>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default Contact;
