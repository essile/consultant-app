import React, { Component } from "react";
import { Container } from "reactstrap";
import UserCard from "../Components/UserCard";
import { GetAllConsultants } from "../serviceClients/UserService";

class ConsultantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consultants: []
    };
  }

  componentDidMount = () => {
    GetAllConsultants(response => {
      if (response.status === 200) {
        let allConsultants = response.data;
        this.setState({ consultants: allConsultants });
      } else {
        console.log("Error, response status: " + response.status);
      }
    });
  };

  render() {
    let consultantsListed = this.state.consultants.map((consultant, index) => {
      return (
        <UserCard
          userId={consultant.userId}
          key={consultant.userId}
          firstName={consultant.firstName}
          lastName={consultant.lastName}
          role={consultant.role}
          userSkills={consultant.userSkills}
          preferableRoles={consultant.preferableRoles}
          description={consultant.description}
          phoneNumber={consultant.phoneNumber}
          email={consultant.email}
          pictureUrl={consultant.pictureUrl}
        />
      );
    });

    return (
      <Container>
        {consultantsListed}
      </Container>
    );
  }
}

export default ConsultantList;
