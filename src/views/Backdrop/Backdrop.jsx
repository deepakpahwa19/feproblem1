import React from 'react';
import styled from 'styled-components';

export const Backdrop = ({ show = true }) => {
    return show ? <BackdropStyle /> : null;
};

const BackdropStyle = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;
