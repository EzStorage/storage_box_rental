import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
    padding-top: 120px;
`;

export const IconWrapper = styled.div`
    width: 64px;
    height: 64px;
`;

export const HeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 24px;
    gap: 8px;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 22px;
    font-weight: 700;
    color: #000;
    text-align: center;
`;

export const Description = styled.p`
    font-size: 16px;
    color: #666;
    text-align: center;
    flex-wrap: nowrap;
    span {
        font-weight: 700;
        color: #000;
    }
`;

export const Body = styled.div`
    padding: 24px 0;
`;
