import styled, { css } from 'styled-components';

const Hero = styled.section`
    background-image: linear-gradient(141deg,#04a6d7 0,#209cee 71%,#3287f5 100%);
    align-items: stretch;
    display: block;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 5px;
`;

const HeroBody = styled.div`
    display: block;
    flex-grow: 1;
    flex-shrink: 0;
    padding: 1rem 1rem;
`;

const Container = styled.div`
    display: block;
    margin: 0 auto;
    position: relative;
`;

const Title = styled.p`
    color: #FFF;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.125;
`;

const SubTitle = styled.p`
    color: #FFF;
    margin-top: -1.25rem;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.25;
`;

const HeroFoot = styled.div`
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
`;

const WrapperTabs = styled.nav`
    align-items: stretch;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
    user-select: none;
`;

const ContainerTabs = Container.extend`
    margin-left: 10px;
`;

const TabsUl = styled.ul`
    border-bottom-color: #dbdbdb;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    white-space: nowrap;
`;

const Tab = styled.li`
    display: block;
    flex-grow: 1;
    flex-shrink: 0;
`;

interface TextTab {
    active?: boolean;
}

const TextTab = styled.a`
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
    align-items: center;
    color: #4a4a4a;
    display: flex;
    justify-content: left;
    margin-bottom: -1px;
    padding: .5em 1em;
    vertical-align: top;
    cursor: pointer;
    text-decoration: none;
    text-align: -webkit-match-parent;
    list-style: none;
    ${(props: TextTab) => props.active && css`
        background-color: #fff;
        border-color: #dbdbdb;
        border-bottom-color: transparent !important;
        color: #3273dc;
    `}
`;

export {
    Hero,
    HeroBody,
    HeroFoot,
    Container,
    Title,
    SubTitle,
    ContainerTabs,
    Tab,
    TabsUl,
    TextTab,
    WrapperTabs
};
