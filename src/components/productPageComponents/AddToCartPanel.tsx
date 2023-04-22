import Col from "react-bootstrap/Col";
import { SizeDropdown } from "./SizeDropdown";
import { AdditionalCartInfo } from "./AdditionalCartInfo";
import { AddToCartBtn } from "./AddToCartBtn";

export const AddToCartPanel = (props: {}) => {
  return (
    <Col className="col-4 ms-4 mt-4">
      <p className="small mb-0">juliste</p>
      <h2>Nimi</h2>
      <div className="mb-4">
        <span className="small">Materiaali: </span>
        <span className="fw-bold">Painotettu paperi</span>
      </div>
      <div className="mb-4">
        <p className="mb-0">Koko</p>
        <SizeDropdown />
      </div>
      <h2 className="border-bottom mb-4">25,00€</h2>
      <AddToCartBtn />
      <AdditionalCartInfo />
    </Col>
  );
};
