import styled from 'styled-components';

const SignUpStyled = styled.div`
    .signUpWrap {
        padding-top: 50px;
        /* margin: 20px; */
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        .signUpTitle {
            font-size: 2rem;
            font-weight: bolder;
            margin-top: 10px;
        }
        .errMsg{
          color: red;
        }
        .signUpBox {
            padding: 20px;
            margin: 20px;
            border: 1px solid black;
            border-radius: 5px;
            width: 60%;
            display: flex;
            flex-direction: column;
            text-align: start;
            .usernameBox{
              display: flex;
                flex-direction: column;
                font-size: 10px;
                font-weight: bolder;
                input {
                    padding: 10px;
                }
                .usernameMsg {
                    font-size: small;
                    color: red;
                }
            }
            .emailBox {
                display: flex;
                flex-direction: column;
                font-size: 10px;
                font-weight: bolder;
                input {
                    padding: 10px;
                }
                .emailMsg {
                    font-size: small;
                    color: red;
                }
            }
            .pwBox {
                display: flex;
                flex-direction: column;
                font-size: 10px;
                font-weight: bolder;
                input {
                    padding: 10px;
                }
                .pwMsg {
                    font-size: small;
                    color: red;
                }
            }
            .pwConfirmBox {
                display: flex;
                flex-direction: column;
                font-size: 10px;
                font-weight: bolder;
                input {
                    padding: 10px;
                }
                .pwConfirmMsg {
                    font-size: small;
                    color: red;
                }
            }
        }
        .signUpBtnBox {
            padding-top: 15px;
            text-align: center;
            /* align-items: center; */
            .signUpBtn {
              border: 1px solid;
              background-color: white;
              border-radius: 5px;
              padding: 5px;
            }
            .signUpBtn:hover {
              color: red;
            }
        }
    }
`;

export default SignUpStyled;
