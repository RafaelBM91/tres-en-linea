import * as React from 'react';

import { TabletContent, Item, Img } from './styled';

const Tablet = (): JSX.Element => 
    <TabletContent>
        <Item avatar={'/img/equis.png'} free={false} >
            <Img src='/img/equis.png' />
        </Item>
        <Item avatar={'/img/equis.png'} free={true} />
        <Item avatar={'/img/equis.png'} free={true} />

        <Item avatar={'/img/equis.png'} free={true} />
        <Item avatar={'/img/equis.png'} free={true} />
        <Item avatar={'/img/equis.png'} free={true} />
        
        <Item avatar={'/img/equis.png'} free={true} />
        <Item avatar={'/img/equis.png'} free={true} />
        <Item avatar={'/img/equis.png'} free={false}>
            <Img src='/img/cero.png' />
        </Item>
    </TabletContent>

export { Tablet };
