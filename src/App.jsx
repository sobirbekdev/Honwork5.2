import { Container, Col, Row, Alert } from 'reactstrap';
import { TablFunc } from "./Components/Table";
import { useState } from 'react';
import { Form } from './Components/Form';
// import "../Components/stile.css";

let Data = [


    {
        id: 1,
        name: "Umid",
        address: "Surxandaryo",
        age: 21,
    },
    {
        id: 2,
        name: "Xojiakbar",
        address: "Samarqand",
        age: 17,
    },
    {
        id: 3,
        name: "Ulug'bek",
        address: "Namangan",
        age: 17,
    },
    {
        id: 4,
        name: "Samandar",
        address: "Toshkent",
        age: 19,
    },
    {
        id: 5,
        name: "Akmal",
        address: "Jizax",
        age: 5,
    },
    {
        id: 6,
        name: "Abror",
        address: "Buxoro",
        age: 25,
    },
    {
        id: 7,
        name: "Sobirbek",
        address: "Surxondaryo",
        age: 21,
    }
];


function App() {

    let [userData, setUserData] = useState(Data);

    const removeUser = (index) => {
        let newData = userData.filter((user, i) => i !== index);
        setUserData(newData);
    }

    return (
        <>
            <Container>
                <Row className='rov'>
                    <Col md="8">
                        <Alert color="primary">
                            <h1 className='alert__title'>To-Do-LIST</h1>
                        </Alert>
                        <Form userData={userData} setData={setUserData} />
                        <TablFunc userData={userData} removeUser={removeUser} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default App

