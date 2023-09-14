import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispacth = useDispatch();

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>

        <i
          className="bi bi-heart ms-3"
          onClick={() => {
            dispacth({
              type: "ADD_TO_FAVOURITE_COMPANIES",
              payload: data.company_name,
            });
          }}
        ></i>
        {/* <Link to={"/favouritesCompany"}>
        <i className="bi bi-heart-fill"></i>
      </Link> */}
      </Col>
      <Col xs={9} style={{ textAlign: "center" }}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
