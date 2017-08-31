/// <reference types="react" />
import * as React from 'react';
export interface IPropsInfo {
    title: string;
}
export interface IStateInfo {
    size: string;
}
export declare class Content extends React.Component<IPropsInfo, IStateInfo> {
    state: IStateInfo;
    constructor(props: IPropsInfo);
    handleDateChange(e: any): void;
    handleBtnClick(event: Event): void;
    render(): JSX.Element;
}
