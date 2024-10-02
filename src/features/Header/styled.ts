import styled from 'styled-components';

const HeaderStyled = styled.div<{ $visible: boolean }>`
    .headerWrap {
        border: 1px dashed #ccc;
        padding: 10px;
        height: 50px;
        width: 100%;
        position: fixed;

        transition: transform 0.3s ease, opacity 0.3s ease;
        transform: ${({ $visible }) => ($visible ? 'translateY(0)' : 'translateY(-100%)')};
        opacity: ${({ $visible }) => ($visible ? 1 : 0)};

        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        .logo {
            font-weight: bolder;
            cursor: pointer;
        }
        .logo:hover {
            color: red;
        }
        .navBtn {
            display: flex;
            div {
                padding: 5px;
                cursor: pointer;
            }
            div:hover {
                color: red;
            }
        }
    }
    .headerWrap:hover {
        border: 1px dashed black;
    }
`;

export default HeaderStyled;
