import styled from "styled-components";

export const PresentationBlock = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    padding: 40px;
    width: 100%;
`;

export const ImgAboutAvatar = styled.img`
    outline: none;
    height: 200px;
    width: 201px;
    position: absolute;
    left: -70px;
`;

export const BlockInfo = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0 0 0 120px;
;
`

export const BlockInfoText = styled.p`
    font-size: 15px;
    font-weight: bold;
    line-height: 22px;
    text-align: justify;
    color: #000000;
`