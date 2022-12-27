import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;


`

export const Heading = styled.div`
    margin-top: 16.5vh;
    text-align: center;
    > h1 {
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        color: #393c41
    }
    > h2 {
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #5c5e62;
    }
`

export const Button = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 130px;

    > button {
        background: #1a1720;
        color: white;
        opacity: 0.8;

        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.4px;
        text-transform: uppercase;

        padding: 13px 40px;
        border-radius: 20px;
        border: none;
        outline: 0;
        cursor: pointer;

        &.white {
            background: #fff;
            color: #1a1720;
            opacity: 0.65;

        }

        & + button {
            margin: 10px 0 0;
        }
        
    }
`