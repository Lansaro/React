const Tabs = (props) => {
    const { allTabs, currentIndex, setCurrentIndex } = props;
    const tabStyle = (index) => {
        if (index === currentIndex) {
            return "selectedTab";
        } else {
            return "nonSelectedTab";
        }
    };
    const setSelectedTab = (index) => {
        setCurrentIndex(index);
    };
    return (
        <div className="tabs">
            {allTabs.map((item, index) => (
            <div className={`tab ${ tabStyle(index) }`} onClick={(e) => setSelectedTab(index) }>
            { item.label }
            </div>))}
        </div>
    )
}

export default Tabs;