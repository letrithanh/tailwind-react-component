import { Transition } from "@headlessui/react";
import React from "react";
import HeaderItem from "./header-item/header-item.component";
import { IHeaderItem } from "./header-item/header-item.interface";
import { HeaderProps, HeaderState } from "./header.interface";

export default class Header extends React.Component<HeaderProps, HeaderState> {

    constructor(props) {
        super(props);
        this.state = {
            isMobileMenuOpen: false,
        };
        this.toggleMobileMenuState = this.toggleMobileMenuState.bind(this);
        this.isHeaderItemActived = this.isHeaderItemActived.bind(this);
    }

    private toggleMobileMenuState() {
        this.setState({isMobileMenuOpen: !this.state.isMobileMenuOpen});
    }

    private isHeaderItemActived(headerItem: IHeaderItem) {
        return this.props.selectedItem.id === headerItem.id;
    }

    private getColorName() {
        return this.props.color ? this.props.color : "gray";
    }

    render() {
        return (
            <div>
                <nav className={`bg-${this.getColorName()}-800`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex w-full justify-between items-center">
                                <div className="flex-shrink-0">
                                    <img className="h-8 w-8" src={this.props.logoSVGSrc} alt="Logo" />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {
                                            this.props.items.map((headerItem, index) => (
                                                <HeaderItem isActive={this.isHeaderItemActived(headerItem)} key={index}>{headerItem.value}</HeaderItem>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button 
                                    className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    onClick={this.toggleMobileMenuState}>
                                    <span className="sr-only">Open main menu</span>
                                    <svg 
                                        className={`${this.state.isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    <svg 
                                        className={`${this.state.isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:hidden">
                        <Transition 
                            show={this.state.isMobileMenuOpen}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {
                                this.props.items.map((headerItem, index) => (
                                    <HeaderItem isActive={this.isHeaderItemActived(headerItem)} key={index}>{headerItem.value}</HeaderItem>
                                ))
                            }
                            </div>
                        </Transition>
                    </div>
                </nav>
            </div>
        );
    }

}