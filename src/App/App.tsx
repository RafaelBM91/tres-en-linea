import * as React from 'react';
import styled from 'styled-components';

interface State {
    contador: number;
    incremento: number;
}

const HOCBaseRender = (WrapperComponent: any) =>
    (incremento: number) => 
        class HOCBase extends React.Component<{}, State> {
            private instance = null;
            constructor(props) {
                super(props);
                this.state = {
                    contador: 0,
                    incremento
                };
                this.clickButton = this.clickButton.bind(this);
            }
            clickButton () {
                this.setState({ contador: this.state.contador + incremento });
            }
            render() {
                return (
                    <React.Fragment>
                        <WrapperComponent {...this.state} callback={this.clickButton} />
                    </React.Fragment>
                );
            }
        }

interface Props {
    contador: number;
    incremento: number;
    callback: any;
}

const Presentacional = (ComponentShow: any) =>
    (props: Props): JSX.Element => (
        <React.Fragment>
            <h3>
                contador:&nbsp;
                <ComponentShow>
                { 
                    props.contador
                }
                </ComponentShow>
            </h3>
            <br/>
            <button onClick={props.callback}>incremento (+ {props.incremento})</button>
        </React.Fragment>
    );

const ShowRed = styled.span`
    color: red;
`;

const ShowBlue = styled.span`
    color: blue;
`;

const AppMasterR = HOCBaseRender(Presentacional(ShowRed));
const AppMasterB = HOCBaseRender(Presentacional(ShowBlue));

const AppForOne = AppMasterR(1);
const AppForFour = AppMasterB(4);

export const App = () => {
    return (
        <React.Fragment>
            <AppForOne />
            <hr />
            <AppForFour />
        </React.Fragment>
    );
};
