import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import BtnHome from "./BtnHome";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favouritesCompanies = useSelector(
    (state) => state.favourites.companies
  );

  return (
    <Container>
      <Row>
        <Col className="my-3 d-flex justify-content-between">
          <h1 className="display-4 fw-boder">Your favourites</h1>
          <BtnHome />
        </Col>
      </Row>
      {favouritesCompanies.map((company, index) => (
        <Row
          key={index}
          className="mx-0 mt-3 p-3"
          style={{ border: "1px solid #00000033", borderRadius: 4 }}
        >
          <Col xs={10}>
            <strong>Company: </strong>
            <Link to={`/${company}`}>{company}</Link>
          </Col>
        </Row>
      ))}
    </Container>
  );
};
export default Favourites;
