import { IHeaderItem } from "./header-item/header-item.interface";

export interface HeaderProps {
    items: IHeaderItem[]
    selectedItem: IHeaderItem,
    logoSVGSrc: string,
    color?: string
}

export interface HeaderState {
    isMobileMenuOpen: boolean
}