import styled from 'styled-components';

interface props {
    visible: boolean;
}

const HeaderStyled = styled.div<props>`
    .headerWrap {
        border: 1px dashed #ccc;
        padding: 10px;
        height: 50px;
        width: 100%;
        position: fixed;
      
        transition: top 0.5s ease-in-out;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        .menuBtn{
          cursor: pointer;
        }
        .menuBtn:hover{
          color: red;
        }
        .logo {
            font-weight: bolder;
            div {
              cursor: pointer;
            }
            div:hover {
                color: red;
            }
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
    .menuBar{
        position: absolute;
        border: 1px solid;
        height: 100%;
        width: 40%;
        background-color: white;
        color: black;
    }
`;

export default HeaderStyled;
