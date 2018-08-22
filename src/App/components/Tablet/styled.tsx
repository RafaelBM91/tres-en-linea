import styled, { css } from 'styled-components';

import { StyleItemModel } from './models';

const TabletContent = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction:	row;
    justify-content: space-between;
    width: 600px;
    height: 600px;
    padding-top: 7px;
    background: transparent;
`;

const Item = styled.div`
    display: flex;
    width: 190px;
    height: 190px;
    background: transparent;
    border: 1px solid #C0C0C0;
    &&:hover {
        ${(props: StyleItemModel) => props.free && css`
            background-image: url( ${props.avatar} );
            background-size: 188px 190px;
            background-repeat: no-repeat;
            opacity: 0.5;
            cursor: pointer;
        `}
    }
`;

const Img = styled.img`
    width: 99%;
`;

export { TabletContent, Item, Img };
