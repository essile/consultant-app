import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle} from "reactstrap";
import {Link} from "react-router-dom";
import PositionDetails from '../Containers/PositionDetails';


const PositionCard = (props) => {

    const positionUrl = `position-details/${props.positionId}`;
        return (
            <div>
                <Link to={positionUrl}><Card>
                    <CardBody>
                    <CardImg top width="100%" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
                        <CardTitle>{props.role}</CardTitle>
                        <CardSubtitle>{props.location}</CardSubtitle>                      
                    </CardBody>
                </Card>
                </Link>
                <PositionDetails positionId={props.positionId} />
            </div>
        );
    }


export default PositionCard;