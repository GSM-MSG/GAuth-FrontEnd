import styled from "@emotion/styled";

export const Positioner = styled.div`
    position: relative;
    left: 20vw;
    width: 80%;
    height: 100vh;
    display: flex;
    align-items: center;
`

export const Layer = styled.div`
    display: flex;
    gap: 50px;
    width: 100%;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
    width: 40%;
`

export const FormTitle = styled.div`
    h1{
        font-family: 'Pretendard';
    }
    h3{
        color: #929292;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    width: 95%;
    margin-left: 5%;

    input {
        background: none;
        border-bottom: 2px solid #2e80cc;
        font-size: 24px;
        font-weight: 500;
        padding: 10px;
    }
`

export const Submit = styled.button`
    width: 350px;
    height: 80px;
    color: #fff;
    background: #2E80CC;
    border-radius: 40px;
    font-size: 28px;
    margin: 0 auto;
    font-weight: 800;
`


export const ImgBox = styled.div`
    width: 40%;
    display: flex;
    align-items: center;

    svg{
        width: 100%;
    }
`