import React from 'react';
// import { Simple } from 'hooks/UseState';
// import { Simple } from 'hooks/UseEffects';
// import { Simple } from 'hooks/UseContext';
// import { Simple2 } from 'hooks/UseCustom';
// import { Simple } from 'hooks/UseRef';
// import { Simple } from 'hooks/UseRefForward';
import { Simple } from 'hooks/UseMemo';

export class App extends React.Component {
    public render() {
        return (
            <div>
                <Simple />
            </div>
        );
    }
}
