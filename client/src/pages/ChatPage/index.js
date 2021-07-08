import React, { useState, useEffect, useRef } from "react";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


import io from "socket.io-client";
import {
    Page,
    Container,
    TextArea,
    Button,
    LogOutButton,
    Form,
} from "./ChatPageElements";

import axios from "axios";
import { FiSend } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

import MessageRow from "./../../components/MessageRow/index";
import { useLocation, useHistory } from "react-router-dom";
const ChatPage = (props) => {
    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [currentUser, setCurrentUser] = useState(undefined);
    const location = useLocation();
    const history = useHistory();
    const socketRef = useRef();

    useEffect(() => {
        if (!location.state || !location.state.user) {
            history.push("/");
        } else {
            setCurrentUser(location.state.user);
        }

        socketRef.current = io.connect("/");

        socketRef.current.on("your id", (id) => {
            setYourID(id);
        });

        //Get all messages
        axios.get(`/messages/`).then((res) => {
            const messages = res.data;
            setMessages(messages);
        });
        socketRef.current.on("message", (message) => {
            receivedMessage(message);
        });
    }, []);

    function receivedMessage(message) {
        setMessages((oldMsgs) => [...oldMsgs, message]);
    }

    function sendMessage(e) {
        e.preventDefault();
        const messageObject = {
            body: { message: message, currentUser: currentUser },
            id: yourID,
        };
        setMessage("");

        /* Post request of message and the sender */
        axios
            .post(`/messages/`, {
                messageObject: messageObject,
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

        /* Update the socket with new message */
        socketRef.current.emit("send", messageObject);
    }

    const handleLogout = () => {
        axios
            .delete(`/connected/`, {
                params: {
                    nickname: currentUser.nickname,
                },
            })
            .then(function(response) {
                history.push({
                    pathname: "/",
                    state: undefined,
                });
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    return ( <
        Page >
        <
        Navbar bg = "light" >
        <
        Navbar.Brand > ChatGroup < /Navbar.Brand> <
        Navbar.Text >
        Sign in as: { location.state.user.nickname } <
        /Navbar.Text> <
        LogOutButton onClick = { handleLogout } >
        Log out <
        BiLogOut / >
        <
        /LogOutButton> < /
        Navbar >

        {
            location.state && ( <
                Container > {
                    messages.map((message, index) => {
                        if (message.body.currentUser.nickname === currentUser.nickname) {
                            return ( <
                                MessageRow key = { index-- }
                                message = { message.body.message }
                                myMessage = { true }
                                currentUser = { currentUser }
                                />
                            );
                        }
                        return ( <
                            MessageRow key = { index-- }
                            message = { message.body.message }
                            myMessage = { false }
                            currentUser = { message.body.currentUser }
                            />
                        );
                    })
                } <
                /Container>
            )
        } {
            location.state && ( <
                Form onSubmit = { sendMessage } >
                <
                TextArea value = { message }
                onChange = {
                    (e) => setMessage(e.target.value)
                }
                placeholder = "Say something..." /
                >
                <
                Button >
                Send <
                FiSend / >
                <
                /Button> < /
                Form >
            )
        }

        <
        /Page>
    );
};

export default ChatPage;