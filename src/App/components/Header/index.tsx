import * as React from 'react';

import {
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
} from './styled';

const Header = (): JSX.Element =>
    <Hero>
        <HeroBody>
            <Container>
                <Title>Michi</Title>
                <SubTitle>--version X vs 0</SubTitle>
            </Container>
        </HeroBody>
        <HeroFoot>
            <WrapperTabs>
                <ContainerTabs>
                    <TabsUl>
                        <Tab>
                            <TextTab active={true}>Home</TextTab>
                        </Tab>
                    </TabsUl>
                </ContainerTabs>
            </WrapperTabs>
        </HeroFoot>
    </Hero>

export { Header };
