import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Page,
    Container,
    TextArea,
    Button,
    Form,
    HeaderH1,
    Label,
    MessageText,
} from "./LoginPageElements";
import { BiLogIn } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import axios from "axios";

const LoginPage = (props) => {
    const [nickname, setNickName] = useState(undefined);
    const [message, setMessage] = useState(undefined);
    const [error, setError] = useState(false);
    let history = useHistory();

    const handleLogIn = async(e) => {
        e.preventDefault();
        let avater_color =
            "#" +
            Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");

        if (nickname !== null) {
            //Get all messages
            axios
                .get(`/connected/`, {
                    params: { nickname: nickname },
                })
                .then((res) => {
                    if (res.data.length === 0) {
                        postUser(nickname);

                        history.push({
                            pathname: "/chatpage",
                            state: { user: { nickname: nickname, avatar: avater_color } },
                        });
                        setMessage(undefined);
                    } else {
                        getUser(nickname);
                        history.push({
                            pathname: "/chatpage",
                            state: { user: { nickname: nickname, avatar: avater_color } },
                        });
                        setMessage(undefined);
                    }
                });
        } else {
            setMessage("Please enter some nick-name, you entered nothing.");
            setError(true);
        }
    };

    const postUser = (nickname) => {
        axios
            .post(`/connected/`, {
                nickname: nickname,
            })
            .then((res) => {
                res.send(res.data);
            });
    };


    const getUser = (nickname) => {
        axios
            .post(`/connected/`, {
                nickname: nickname,
            })
            .then((res) => {
                res.send(res.data);
            });
    };

    return ( <
        Page >
        <
        Navbar bg = "light" >
        <
        Navbar.Brand > ChatGroup < /Navbar.Brand> <
        Navbar.Text >
        login <
        /Navbar.Text>

        <
        /Navbar>


        <
        Container >
        <
        Form onSubmit = { handleLogIn } >
        <
        Label > Please enter a nickname: < /Label> <
        TextArea value = { nickname }
        onChange = {
            (e) => setNickName(e.target.value)
        }
        placeholder = "Nickename..." /
        >
        <
        Button onClick = { handleLogIn } >
        Log in
        <
        BiLogIn / >
        <
        /Button> {
        message && < MessageText error = { error } > { message } < /MessageText>} < /
        Form > <
        /Container> < /
        Page >
    );
};

export default LoginPage;