import { IHeaderItem } from "../components/header/header-item/header-item.interface";
import Header from "../components/header/header.component";

const HomePage = () => {

    const headerItems: IHeaderItem[] = [];
    const selectedHeaderItem: IHeaderItem = {id: 1, value: "Dashboard", path: "#"};
    headerItems.push(selectedHeaderItem);
    headerItems.push({id: 2, value: "Team", path: "#"});
    headerItems.push({id: 3, value: "Projects", path: "#"});
    headerItems.push({id: 4, value: "Calendar", path: "#"});
    headerItems.push({id: 5, value: "Reports", path: "#"});


    return (
        <>
            <Header logoSVGSrc="/svg/unicorn.svg" items={headerItems} selectedItem={selectedHeaderItem}/>

            <div>
                <div>Icons made by <a href="https://www.flaticon.com">Flaticon</a></div>
            </div>
        </>
    );
}

export default HomePage;