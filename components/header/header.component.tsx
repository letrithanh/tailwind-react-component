import { Transition } from "@headlessui/react";
import React from "react";
import { HeaderProps, HeaderState } from "./header.interface";

export default class Header extends React.Component<HeaderProps, HeaderState> {

    constructor(props) {
        super(props);
        this.state = {
            isMobileMenuOpen: false
        };
        this.toggleMobileMenuState = this.toggleMobileMenuState.bind(this);
    }

    private toggleMobileMenuState() {
        this.setState({isMobileMenuOpen: !this.state.isMobileMenuOpen});
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }

}