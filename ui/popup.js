changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: applyDarkMode,
    });
});

//main functions
function applyDarkMode() {
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
    const sidebarTableText = doc('.scoreboardRelativeRankingTableView-table .highlight td:last-child', true);

    sidebarTable.forEach(st => {
        st.style['border'] = '0';
    })

    sidebarTableText.forEach(st => {
        st.style['color'] = theme.black;
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

    //trap
    const trapView = doc('.trapImageView');
    trapView.style['background'] = theme.dgray;

    const trapViewProfile = doc('.trapImageView-layer');
    trapViewProfile.style['background'] = theme.dgray;

    //team
    const teamDesc = doc('.teamPage-profile-description');
    teamDesc.style['color'] = theme.white;

    //profile
    const profileMessageTitle = doc('.messageBoardView-title');
    const profileMessage = doc('.messageBoardView-message', true);
    const profileMessageLinks = doc('.messageBoardView-message a', true);

    profileMessageTitle.style['color'] = theme.white;

    profileMessage.forEach(p => {
        p.style['background'] = theme.secondaryDark;
        p.style['color'] = theme.white;
        p.style['border-width'] = '0px';
    })

    profileMessageLinks.forEach(p => {
        p.style['color'] = theme.blue;
    })

    const pagination = doc('.pagerView-container');
    const paginationBtnActive = doc('.pagerView-section.next.active .pagerView-link', true);

    pagination.style['background'] = theme.secondaryDark;
    pagination.style['color'] = theme.white;

    paginationBtnActive.forEach(p => {
        p.style['color'] = theme.white;
    })
}
