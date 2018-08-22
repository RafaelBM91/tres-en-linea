import styled, { css } from 'styled-components';

import { Content } from '../../styled';

const ContentMain = Content.extend`
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    flex-direction:	row;
    @media (max-width: 980px) {
        flex-wrap: wrap;
    }
`;

const Section = styled.section`
    background-color: transparent;
    width: 400px;
    min-width: 500px;
    margin: 0px;
    padding: 0px;
    border: 0px;
    @media (max-width: 980px) {
        width: 100%;
        min-width: 100%;
        order: 2;
    }
`;

const SectionLeft = Section.extend`
    border-right: 1px solid #C0C0C0;
    margin-right: 5px;
    border-top-right-radius: 5px;
`;

const SectionRight = Section.extend`
    border-left: 1px solid #C0C0C0;
    margin-left: 5px;
    border-top-left-radius: 5px;
`;

const CentralSection = Section.extend`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: transparent;
    min-width: 600px;
    width: 800px;
    flex-grow: 1;
    @media (max-width: 980px) {
        width: 100%;
        min-width: 100%;
        order: 1;
    }
`;

const ContentListLeft = styled.div`
    height: 500px;
    max-height: 500px;
    direction: rtl;
    overflow-x: hidden;
    overflow-y: scroll;
`;

const ContentListRight = ContentListLeft.extend`
    direction: ltr;
    max-height: 680px;
    height: 670px;
`;

const List = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    direction: ltr;
`;

const HeaderSectionList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    background-color: rgba(0,145,240,.5);
    color: #fff;
    align-items: center;
    border-radius: 4px 4px 0 0;
    line-height: 1.25;
    padding: .75em 1em;
    position: relative;
`;

interface Style {
    flag: boolean;
}

const BtnArrowGeneral = styled.a`
    background-color: transparent;
    width: 10px;
    height: 5px;
    border: 0px solid;
    background-image: url(/img/Arrow.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 6px 5px;
    cursor: pointer;
    padding: calc(.9em - 1px) .7em;
    outline: none;
    font-weight: 700;
    transition: transform 1s;
    ${(props: Style) => props.flag && css`
        transform: rotate(180deg);
    `}
`;

const HeaderSectionChat = HeaderSectionList;

export {
    ContentMain,
    SectionLeft,
    CentralSection,
    SectionRight,
    HeaderSectionList,
    ContentListLeft,
    ContentListRight,
    List,
    HeaderSectionChat,
    BtnArrowGeneral
};
