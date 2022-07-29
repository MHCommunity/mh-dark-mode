// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
    });
}


//trigger on click
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: applyDarkMode,
    });
});

//trigger on load
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url.startsWith("https://www.mousehuntgame.com/") == false)
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: applyDarkMode,
        });
})

//main functions
function applyDarkMode() {
    function doc(clss, isAll) {
        return isAll ? document.querySelectorAll('.PageCamp ' + clss) : document.querySelector('.PageCamp ' + clss);
    }

    const theme = {
        white: "#f1f1f1",
        lgray: '#c8c8c8',
        mainDark: "#1a1a1a",
        secondaryDark: "#242424",
        blue: '#009adf'
    }

    //wrapper
    const pageFrameViewContent = doc('.pageFrameView-content')
    const pageFrameViewContentContainer = doc('.pageFrameView-contentContainer')

    const frameViewLeft = doc('.pageFrameView-column.left')
    const frameViewRight = doc('.pageFrameView-column.right')

    pageFrameViewContent.style['background'] = theme.mainDark;
    pageFrameViewContentContainer.style['background'] = theme.secondaryDark;

    frameViewLeft.style['background-image'] = 'none';
    frameViewLeft.style['background'] = theme.mainDark;
    frameViewLeft.style['border-right-color'] = theme.secondaryDark;

    frameViewRight.style['background-image'] = 'none';
    frameViewRight.style['background'] = theme.mainDark;
    frameViewRight.style['border-left-color'] = theme.secondaryDark;


    //sidebar
    const sideBar = doc('.pageSidebarView')
    const sideBarBlocks = doc('.pageSidebarView-block', true)
    const sideBarBlocksLink = doc('.pageSidebarView-block a', true)
    const sideBarBlocksFb = doc('.pageSidebarView .fb-page')
    const sideBarUser = doc('.pageSidebarView-user')
    const sideBarUserLink = doc('.pageSidebarView-user a', true)

    sideBar.style['background'] = theme.secondaryDark;

    sideBarBlocks.forEach(s => {
        s.style['background'] = theme.secondaryDark;
        s.style['color'] = theme.white;
    })

    sideBarBlocksLink.forEach(l => {
        l.style['color'] = theme.blue;
    })

    sideBarBlocksFb.style['background'] = 'transparent';

    sideBarUser.style['color'] = theme.white;
    sideBarUser.style['border'] = '0';
    sideBarUserLink.forEach(l => {
        l.style['color'] = theme.blue;
    })

    //sidebar scoreboard
    const sidebarTable = doc('.scoreboardRelativeRankingTableView-table', true);
    sidebarTable.forEach(st => {
        st.style['border'] = '0';
    })

    //header
    const headerView = doc('.mousehuntHeaderView');
    const menuItemsWrapper = doc('.mousehuntHeaderView-gameTabs')
    const menuItems = doc('.mousehuntHeaderView .menuItem', true);
    const newsTicker = doc('.mousehuntHeaderView-newsTicker')
    const newsTickerLabel = doc('.mousehuntHeaderView-newsTicker .label')
    const newsTickerLink = doc('.mousehuntHeaderView-newsTicker a', true)

    headerView.style['background'] = theme.mainDark;
    menuItemsWrapper.style['background'] = theme.mainDark;

    menuItems.forEach(m => {
        m.style['background'] = theme.secondaryDark;
        m.style['color'] = theme.white;
    })

    newsTicker.style['color'] = theme.white;
    newsTickerLabel.style['color'] = theme.blue;

    newsTickerLink.forEach(l => {
        l.style['color'] = theme.blue;
    })
}