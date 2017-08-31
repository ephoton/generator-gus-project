/// <reference types="react" />
import * as React from 'react';
export interface IPropsInfo {
    data: {
        userId: string;
        name: string;
    };
}
export interface IStateInfo {
    size: string;
}
export declare class Home extends React.Component<IPropsInfo, IStateInfo> {
    state: IStateInfo;
    constructor(props: IPropsInfo);
    test(): void;
    render(): JSX.Element;
}
