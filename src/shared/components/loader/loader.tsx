import { FC } from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import "./loader.scss";

const Loader: FC = () => {
  return (
    <div className="loader-wrapper">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};
export default Loader;
