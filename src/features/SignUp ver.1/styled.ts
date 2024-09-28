import styled from 'styled-components';

const SignUpStyled = styled.div`
    .signupWrap {
        text-align: center;
        display: flex;
        flex-direction: column;
        .signupBox {
            display: flex;
            flex-direction: column;
            .emailBox {
                .emailMsg {
                  font-size: small;
                    color: red;
                }
            }
            .pwBox {
                .pwMsg {
                  font-size: small;
                    color: red;
                }
            }
            .pwConfirmBox {
                .pwConfirmMsg {
                  font-size: small;
                    color: red;
                }
            }
        }
    }
`;

export default SignUpStyled;
