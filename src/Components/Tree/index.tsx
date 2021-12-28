import React, { FunctionComponent, ReactNode } from "react";
import TreeItem from "./TreeItem";


export type RenderTreeType = {
    component: string
    props: any
    children?: string | ReactNode
}
interface RenderTreeInterface {
    data?: RenderTreeType[]
}

const RenderTree: FunctionComponent<RenderTreeInterface> = ({data}) => {
    return (
        <>
            {
                data?.map(({
                    component,
                    props,
                    children,
                }, key: number) => (
                    <TreeItem 
                        key={`tree-item-${key}`}
                        component={component}
                        props={props}
                        children={children}
                    />
                ))
            }
        </>
    )
}

export default RenderTree;