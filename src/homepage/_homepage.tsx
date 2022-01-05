import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


const HomepageContainer = styled.div`

    @import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);

    background-color: #F1F4F8;
    font-family: 'Karla', sans-serif;
    padding-bottom: 40px;
  
    h3, p {
        color: #02345D;
    }
  
    p {
        font-size: 16px;
    }
`;

const LogoImage = styled.img`
    width: 200px;
    height: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 40px;
`;

const TextBoxDiv = styled.div`
    background-color: #FBD6CC;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;

    @media (min-width: 701px) {
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }
`;

const SocialMediaDiv = styled.div`
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    border-spacing: 10px;

    @media (max-width: 700px) {
        width: fit-content;
        align-content: center;
        border-spacing: 0px;
    }
`;

const SocialMediaButton = styled.a`
    clear: both;
    white-space: nowrap;
    font-size: 16px;
    display: table-cell;
    border-radius: 5px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.35);
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    transition: all .5s;
    overflow: none;

    &:hover {
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.45);
    }
  
    &:focus {
        box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.4);
    }
  
    &>span, &>i {
        float: left;
        padding: 13px;
        -webkit-transition: all .5s;
        -moz-transition: all .5s;
        transition: all .5s;
    }
  
    &>span {
        border-radius: 0 5px 5px 0;
        padding: 14px 18px 16px;
        white-space: nowrap;
        color: #F1F4F8;
        background: #F37D68;
    }
  
    &:focus>span {
        background: #9a9a9a
    }
  
    &>i {
        border-radius: 5px 0 0 5px;
        position: relative;
        width: fit;
        text-align: center;
        font-size: 1.25em;
        color: #F1F4F8;
        background: #02345D
    }
  
    &:hover>i, &:focus>i {
        color: #F37D68
    }
  
    &>i:after {
        content: "";
        border: 8px solid;
        border-color: transparent transparent transparent #02345D;
        position: absolute;
        top: 13px;
        right: -15px
    }
  
    @media (max-width: 700px) {
        display: table;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
  
        span, i {
            padding: none;
        }
    }
`;

const GoogleCalendarIFrame = styled.iframe`
    border: 0px;
`;

export const Homepage = (props: {}) => {

    return (
        <HomepageContainer>
            <LogoImage src="https://i.postimg.cc/P5wTsT7Q/12925-UI-UX-MIT-logo-VP-04.png"></LogoImage>

            <TextBoxDiv>
                <h3>About Us</h3>
                <p>We are a student group focused on generating greater exposure,
                    knowledge, and interest in user interface and user experience design. Members can learn more about the field via
                    our workshops and speaker series, which provide opportunities to network with professionals in the field.</p>

                <p>Our members have gone on to work for Microsoft, Dropbox, Bloomberg, and more!</p>
            </TextBoxDiv>

            <SocialMediaDiv>
                <SocialMediaButton href="https://www.instagram.com/uiux.mit/" target="_blank" rel="noopener noreferrer">
                    <i><FontAwesomeIcon icon={faInstagram} /></i>
                    <span>Instagram</span>
                </SocialMediaButton>
                <SocialMediaButton href="https://groups.mit.edu/webmoira/list/uiux-members" target="_blank" rel="noopener noreferrer">
                    <i><FontAwesomeIcon icon={faBell} /></i>
                    <span>Join Our Mailing List</span>
                </SocialMediaButton>
                <SocialMediaButton href="mailto:uiux-officers@mit.edu" target="_blank" rel="noopener noreferrer">
                    <i><FontAwesomeIcon icon={faEnvelope} /></i>
                    <span>Email Us</span>
                </SocialMediaButton>
            </SocialMediaDiv>

            <TextBoxDiv>
                <h3>Meeting Schedule</h3>
                <p>All club meetings are sent out via email as well as posted
                    on our Google Calendar.</p>
                <iframe title="Google Calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23f1f4f8&ctz=America%2FNew_York&showTabs=0&mode=AGENDA&showPrint=0&showNav=0&showTitle=0&title=UI%2FUX%20%40%20MIT%20Embedded&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=bWNtcGU1ZWE3dnRtdjA2bjMxYTI3cXNsb2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%230B8043&color=%23F6BF26" width="100%" height="300px" scrolling="no"></iframe>
            </TextBoxDiv>

        </HomepageContainer>
    )
}