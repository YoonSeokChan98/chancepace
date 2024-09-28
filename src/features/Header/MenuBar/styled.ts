import styled from 'styled-components';

const MenuBarStyled = styled.div`
    .menuBar {
        background-color: white;
        .menuHeader {
            border: 1px solid;
            display: flex;
            align-items: center;
            .profileImg {
                border: 1px solid;
                width: 50px;
                margin: 10px;
            }
            .profileImg img {
                border-radius: 50%;
                width: 100%;
                height: 100%;
            }
        }
        .menuMain {

        }
        .menuFooter {
        }
    }
`;

export default MenuBarStyled;
