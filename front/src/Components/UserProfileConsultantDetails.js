import React from 'react';
import { Table, Label, Badge } from 'reactstrap';

// HARD CODED FOR DEMO PURPOSES
const TECH_STACK = ["Javascript", "ReactJS", "GIT", "CSS", "REST API", "Scrum"];
const ROLE_INTERESTS = ["Front-end", "Back-end", "DevOps"];
const LESS_PREFERABLE_ROLES = ["Project manager", "Scrum Master"];

const UserProfileConsultantDetails = props => {
    const techStack = props.user.techStack || TECH_STACK; // for demo purposes - db does not support techStack yet

    return (
        <Table>
            <tbody>
                <tr>
                    <th scope="row"><Label>Competence highlights: </Label></th>
                    <td>
                        {techStack.map((tag, index) => {
                            return (<span key={index}><Badge>{tag}</Badge>&nbsp;</span>)
                        })}
                    </td>
                </tr>
                <tr>
                    <th scope="row"><Label>Role interests: </Label></th>
                    <td>
                        <Label>{ROLE_INTERESTS.map((role, index) => {
                            return (<div key={index}>{role}</div>)
                        })}</Label>
                    </td>
                </tr>
                <tr>
                    <th scope="row"><Label>Less preferable roles: </Label></th>
                    <td>
                        <Label>{LESS_PREFERABLE_ROLES.map((role, index) => {
                            return (<div key={index}>{role}</div>)
                        })}</Label>
                    </td>
                </tr>
            </tbody>
        </Table>
    );

}

export default UserProfileConsultantDetails;