import React, { FunctionComponent, ReactNode } from "react"
import RenderTree from '.'

interface TreeItemInterface {
    component: string
    props: any
    children?: any
}

const TreeItem: FunctionComponent<TreeItemInterface> = ({
    component,
    props,
    children,
}) => {

    const isString: boolean | any = (value: string | ReactNode) => (typeof value === 'string');
    const child: string | ReactNode = isString(children)? children : <RenderTree data={children} /> 

    return (<>{ React.createElement(component, props, child) }</>);
}

export default TreeItem
