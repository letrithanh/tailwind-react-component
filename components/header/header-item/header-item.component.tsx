import React from "react";
import { HeaderItemProps, HeaderItemState } from "./header-item.interface";

export default class HeaderItem extends React.Component<HeaderItemProps, HeaderItemState> {

    render() {
        return (
            <div className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${this.props.isActive ? "text-white bg-gray-900" : "text-gray-300 hover:text-white hover:bg-gray-700"} `}>
                {this.props.children}
            </div>
        );
    }

}