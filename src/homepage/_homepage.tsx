import React from 'react';
import styled from 'styled-components';

const HomepageContainer = styled.div`
    border: 100px solid #f7a18b;
    background-color: #111147;
    margin: 0;

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        color: white;
        font-size: 5vh;
        vertical-align: center;
        text-align: center;
    }
`;

export const Homepage = (props: {}) => {
    return (
        <HomepageContainer>
            <p>
                MIT UIUX Club Website 
            </p>
            <p>
                ~~ Coming soon in a few weeks! ~~
            </p>
        </HomepageContainer>
    )
}