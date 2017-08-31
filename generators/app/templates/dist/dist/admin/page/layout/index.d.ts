/// <reference types="react" />
import * as React from 'react';
export interface IPropsInfo {
    title: string;
}
export interface IStateInfo {
}
export default class Layout extends React.Component<IPropsInfo, IStateInfo> {
    state: IStateInfo;
    constructor(props: IPropsInfo);
    handleSizeChange: (e: any) => void;
    render(): JSX.Element;
}
