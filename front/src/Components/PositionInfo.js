import React from "react";
import { Row, ButtonGroup, Button, Badge, Container, Col} from "reactstrap";

const PositionDetailsForConsultant = (props) => {
  let position = props.position;

  return (
    <div>
      <Container>
        <Row>
        <Col xs="12" sm="4" md="4">
            <img className='position-logo'
              alt="logo"
              src="https://aw-publicwebstorage-cdn-endpoint-prod-001.azureedge.net/aw-content/logo_main_green.svg"
              height="100px"
              width="200px"
            />
             <p>Skills:</p>
            {/* <ButtonGroup> */}
              {/* <Badge> */}{props.positionSkills}{/* </Badge> */}
              {/* <Badge>{props.positionSkills}</Badge> */}
          {/*   </ButtonGroup> */}
         

          </Col>
          <Col xs="12" sm="8" md="8">           
              <h3>{position.positionRole}</h3>
              <p>Location: {position.location}</p>
              <p>Description: {position.positionDescription}</p>
              <p>Position status: {props.positionStatus}</p>
                       
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default PositionDetailsForConsultant;
