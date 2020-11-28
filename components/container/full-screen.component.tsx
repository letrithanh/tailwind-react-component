import React from "react";

export class FullScreen extends React.Component {

    render() {
        return (
            <div className="w-full h-screen">
                {this.props.children}
            </div>
        );
    }

}