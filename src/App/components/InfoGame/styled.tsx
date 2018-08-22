import styled from 'styled-components';

const InfoGameContent = styled.section`
    width: 598px;
    height: 100px;
    background: blue;
    border-radius: 4px 4px 0 0;
    background-color: rgba(0,145,240,.5);
    -webkit-transition: height 2s;
    transition: height 2s;
    &&:hover {
        height: 135px;

    }
`;

export { InfoGameContent };
