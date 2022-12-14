import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaUsers } from "react-icons/fa";
import ReactLoading from "react-loading";
import { OrganisationsService } from "../../../../services/organisations.service";
import { UserManagementService } from "../../../../services/userManagement.service";
import "./OverviewCols.css";

function UserManagementCard() {
    const [numOfOrgs, setNumOfOrgs] = useState(0);
    const [numOfUsers, setNumOfUsers] = useState(0);
    const [isLoadingUsers, setLoadingUsers] = useState<Boolean>(false);
    const [isLoadingOrgs, setLoadingOrgs] = useState<Boolean>(false);

    const userManagementService = new UserManagementService();
    const organisationsService = new OrganisationsService();

    useEffect(() => {
        setLoadingUsers(true);
        const getTotalNumOfUsers = async () => {
            try {
                const users =
                    await userManagementService.getAllUserManagements();
                setNumOfUsers(users.data.length);
                setLoadingUsers(false);
            } catch (err) {
                console.log(err);
            }
        };
        getTotalNumOfUsers();

        const getTotalNumOfOrganisations = async () => {
            setLoadingOrgs(true);
            try {
                const orgs = await organisationsService.getAllOrganisations();
                setNumOfOrgs(orgs.data.length);
                setLoadingOrgs(false);
            } catch (err) {
                console.log(err);
            }
        };
        getTotalNumOfOrganisations();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numOfUsers, numOfOrgs]);

    return (
        <Col id="userManagementCol">
            <a href="/admin/user-management">
                <Card className="cardStyle">
                    <Card.Title className="cardContent">
                        <h1>
                            <FaUsers /> User Management
                        </h1>
                    </Card.Title>
                    <Card.Text>
                        <h6>View or Edit Users</h6>
                    </Card.Text>
                    <Card.Body className="cardBody">
                        <Row>
                            <Col>
                                <h3>Users</h3>
                                {isLoadingUsers ? (
                                    <ReactLoading
                                        className="loaderAlignment"
                                        type="spin"
                                        color="#203841"
                                        height={"40%"}
                                        width={"40%"}
                                    />
                                ) : (
                                    <h4>{numOfUsers}</h4>
                                )}
                            </Col>
                            <div className="vr" />
                            <Col className="data">
                                <h3>Organisations</h3>
                                {isLoadingOrgs ? (
                                    <ReactLoading
                                        className="loaderAlignment"
                                        type="spin"
                                        color="#203841"
                                        height={"15%"}
                                        width={"15%"}
                                    />
                                ) : (
                                    <h4>{numOfOrgs}</h4>
                                )}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </a>
        </Col>
    );
}

export default UserManagementCard;
