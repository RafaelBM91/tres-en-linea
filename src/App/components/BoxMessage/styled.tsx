import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    color: #4a4a4a;
    width: 95%;
    margin-bottom: 5px;
    margin-left: 5px;
    &&:first-child {
        margin-top: 10px;
    }
`;

const Media = styled.article`
    align-items: flex-start;
    display: flex;
    text-align: left;
`;

const MediaBase = styled.div`
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
`;

const MediaLeft = MediaBase.extend`
    margin-right: 1rem;
`;

const MediaRight = MediaBase;

const Figure = styled.figure`
    height: 64px;
    width: 64px;
    display: block;
    position: relative;
    margin: 5px;
`;

const Img = styled.img`
    display: block;
    height: auto;
    width: 100%;
    border-radius: 100%;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    margin-bottom: .75rem;
    border-bottom: 1px solid;
    width: 95%;
    &&:last-child {
        border-bottom: 0px solid;
    }
`;

const Paragraph = styled.p`
    margin: 0;
    padding: 5px;
    line-height: 1.5;
    min-width: 300px;
`;

const Strong = styled.strong`
    color: #363636;
    font-weight: 700;
`;

const Small = styled.small`
    font-size: .875em;
`;

const ButtonStandar = styled.a`
    background-color: transparent;
    border: 1px solid;
    padding: calc(.375em - 1px) .75em;
    border-radius: 4px;
    border-color: #00d1b2;
    border-top-color: rgb(0, 209, 178);
    border-right-color: rgb(0, 209, 178);
    border-bottom-color: rgb(0, 209, 178);
    border-left-color: rgb(0, 209, 178);
    color: #00d1b2;
    cursor: pointer;
    margin-top: 5px;
    &&:hover {
        background-color: #00d1b2;
        color: #fff;
    }
`;

const ImgGif = styled.img`
    width: 50px;
`;

const WrapperFlex = styled.div`
    display: flex;
    width: 100%;
    margin-left: 20px;
`;

const WrapperTextArea = styled.div`
    width: 300px;
    margin-right: 4px;
`;

const TextArea = styled.textarea`
    width: 98%;
    height: 116px;
    resize: none;
    outline: none;

    &&:focus {
        border: solid 1px #00d1b2;
    }
`;

const WrapperButton = styled.div`
    margin-top: 53px;
    width: 140px;
    margin-right: 4px;
`;

const Button = ButtonStandar.extend`
    padding: calc(3.3em - 1px) 2.75em;
    outline: none;
    font-weight: 700;
`;

export {
    Box,
    Media,
    MediaLeft,
    MediaRight,
    Figure,
    Img,
    Content,
    Paragraph,
    Strong,
    Small,
    ButtonStandar,
    ImgGif,
    WrapperFlex,
    WrapperTextArea,
    TextArea,
    WrapperButton,
    Button
};
