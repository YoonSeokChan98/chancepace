import styled from 'styled-components';

const ToastUiComponentStyled = styled.div`
    .toastUiWrap {
        padding-top: 50px;
        .toastBox {
            text-align: center;
            margin: 10px;
            .btnBox {
                display: flex;
                flex-direction: column;
                align-items: center;
                button {
                    width: 10rem;
                    margin: 10px;
                    background-color: white;
                    border-radius: 5px;
                    border: 1px solid black;
                }
                button:hover {
                    color: red;
                }
            }
        }
    }
`;

export default ToastUiComponentStyled;
