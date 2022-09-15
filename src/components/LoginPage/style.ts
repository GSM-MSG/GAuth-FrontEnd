import styled from "@emotion/styled";

export const Layer = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;

    div{
        overflow: hidden;
    }
`

export const SideWave = styled.img`
    height: 100vh;
    @media (max-width: 1800px){
        margin-left: calc(-1800px + 100vw);
    }
`

export const Title = styled.div`
    position: relative;
    bottom: 100vh;
    color: #fff;
    text-align: center;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: center;

    img{
        height: 475px;
    }

    h1 {
        margin-bottom: 5px;
        font-size: 45px;
        letter-spacing: 16px;
    }

    h2 {
        margin-top: 5px;
        font-size: 35px;
        font-weight: 600;
    }
`

export const LoginWrapper = styled.div`
    width: calc(-909px + 1770px);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 425px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    justify-content: center;
    
    h1{
        text-align: center;
        font-size: 60px;
        margin: 0;
        color: #24F0B9;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 65px;

    small{
        color: #929292;
    }

    input {
       border: none;
       border-bottom: 3px solid black;
       width: 100%;
       padding: 0 30px 10px 30px;
       font-size: 27px;
       font-weight: 400;
       outline: none;
    }

    h2 {
        position: relative;
        margin: 0px auto -60px auto;
        font-size: 27px;
        font-weight: 400;
    }
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
`
export const ButtonContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    font-size: 18px;
    line-height: 21px;

    div{
        color: #929292;
    }
`

export const Submit = styled.button`
    width: 100%;
    height: 60px;
    color: #fff;
    background: linear-gradient(91.68deg, #24F0B9 17.19%, #24F0EC 100%);
    font-weight: 590;
    font-size: 27px;
    line-height: 32px;
    text-align: center;
    border: none;
    border-radius: 30px;
    margin-bottom: 10px;
    cursor: pointer;

    &:active{
        box-shadow: rgba(50, 50, 93, 0.15) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.2) 0px 18px 36px -18px inset;
    }
`