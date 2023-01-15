import { Col, Row } from "react-bootstrap";

export function Footer() {
    return (
        <Row className="mt-3 bg-dark justify-content-center" style={{ textAlign: "center" }}>
            <Col className="text-white" xs={6} md={4}>
                <small>Projektas - "Kursinis darbas" </small>
                <small>Rekomenduojamos parduotuves</small>
                <a href="http://skytech.lt"><h4>skytech</h4></a>
                <a href="http://novastar.lt"><h4>Novastar</h4></a>
                <a href="http://senukai.lt"><h4>Senukai</h4></a>
            </Col>
        </Row>
    );
}