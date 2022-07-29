function doc(clss, isAll) {
    if (isAll) {
        const el = document.querySelectorAll(clss);
        return el;
    }
    else {
        const el = document.querySelector(clss);
        return el || { style: {} };
    }
}

const theme = {
    white: "#ebebeb",
    black: '#0c0c0c',
    lgray: '#c8c8c8',
    dgray: '#9b9b9b',
    mainDark: "#1a1a1a",
    secondaryDark: "#242424",
    tertiaryDark: "#444444",

    blue: '#009adf',
    yellow: '#9c8418'
}

//wrapper
function applyCss() {
    var darkmodeCSS = document.createElement("link");
    darkmodeCSS.setAttribute("rel", "stylesheet");
    darkmodeCSS.setAttribute("type", "text/css");
    //darkmodeCSS.setAttribute("href", chrome.extension.getURL('darkmode.css'));
    document.getElementById("head").appendChild(darkmodeCSS);
}

//apply base dark mode for wrappers etc that is used by mh site all throughout
function applyDarkModeBase() {
    console.log('MouseHunt Dark Mode v0.0.1 applied.');

    const pageFrameViewContent = doc('.pageFrameView-content')
    const pageFrameViewContentContainer = doc('.pageFrameView-contentContainer')

    const frameViewLeft = doc('.pageFrameView-column.left')
    const frameViewRight = doc('.pageFrameView-column.right')

    pageFrameViewContent.style['background'] = theme.lgray;
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

    newsTicker.style['background'] = theme.secondaryDark;
    newsTicker.style['color'] = theme.white;
    newsTickerLabel.style['color'] = theme.blue;

    newsTickerLink.forEach(l => {
        l.style['color'] = theme.blue;
    })

}

//apply dark mode during any dom change
function applyDarkModeDynamic() {
    //trap
    const trapView = doc('.trapImageView');
    trapView.style['background'] = theme.dgray;

    const trapValue = doc('.campPage-trap-trapStat .value', true)
    trapValue.forEach(t => {
        t.style['background'] = theme.lgray;
        t.style['color'] = theme.black;

    })

    //team
    // const teamDesc = doc('.teamPage-profile-description');
    // teamDesc.style['color'] = theme.white;

    //message box
    const messageTitle = doc('.messageBoardView-title');
    const message = doc('.messageBoardView-message', true);
    const messageLinks = doc('.messageBoardView-message a', true);
    const messageTextArea = doc('.messageBoardView-message-textarea', true);

    messageTitle.style['color'] = theme.secondaryDark;

    message.forEach(p => {
        p.style['background'] = theme.secondaryDark;
        p.style['color'] = theme.white;
        p.style['border-width'] = '0px';
    })

    messageLinks.forEach(p => {
        p.style['color'] = theme.blue;
    })

    messageTextArea.forEach(m => {
        m.style['background'] = theme.secondaryDark;
        m.style['color'] = theme.white;
    })

    const profileActiveMap = doc('.mousehuntTabContentContainer-padding');
    profileActiveMap.style['background'] = theme.lgray;

    //pagination
    const pagination = doc('.messageBoardView .pagerView-container', true);
    const paginationBtnActiveNext = doc('.pagerView-section.next.active .pagerView-link', true);
    const paginationBtnActivePrev = doc('.pagerView-section.previous.active .pagerView-link', true);

    pagination.forEach(p => {
        p.style['background'] = theme.secondaryDark;
        p.style['color'] = theme.white;
    })

    paginationBtnActiveNext.forEach(p => {
        p.style['color'] = theme.white;
    })
    paginationBtnActivePrev.forEach(p => {
        p.style['color'] = theme.white;
    })

    //treasure
    const treasureMap = doc('.treasureMapRootView');
    treasureMap.style['background'] = theme.lgray;

    //shop
    const shopContent = doc('.mousehuntHud-page-subTabContent.active', true);
    shopContent.forEach(p => {
        p.style['overflow'] = 'hidden';
    })

    //premium shop
    const premiumShopRoot = doc('.MHCheckoutRootView-pageContainer');
    const premiumShopFoot = doc('.MHCheckoutRootView-footer');

    premiumShopRoot.style['background'] = theme.lgray;
    premiumShopFoot.style['background'] = theme.lgray;

    //gift
    const giftHeader = doc('.giftSelectorView-inboxHeader');
    const giftHeaderLink = doc('.giftSelectorView-inboxHeader a');

    giftHeader.style['background'] = theme.mainDark;
    giftHeader.style['color'] = theme.white;
    giftHeaderLink.style['color'] = theme.blue;

    const giftOTD = doc('.giftSelectorView-inboxGiftOfTheDay');
    const giftOTDLbl = doc('.giftSelectorView-inboxGiftOfTheDay-label', true);
    const giftOTDAbbr = doc('.giftSelectorView-inboxGiftOfTheDay abbr', true);

    giftOTD.style['background'] = theme.secondaryDark;
    giftOTDLbl.forEach(g => {
        g.style['color'] = theme.white;
    })
    giftOTDAbbr.forEach(g => {
        g.style['color'] = theme.white;
    })

    const giftFooter = doc('.giftSelectorView-inbox-footer');
    giftFooter.style['background'] = theme.mainDark;
    giftFooter.style['color'] = theme.white;

    const giftRow = doc('.giftSelectorView-inbox-giftRow', true);
    const giftRowEven = doc('.giftSelectorView-inbox-giftRow:nth-child(even)', true);
    const giftRowLinks = doc('.giftSelectorView-inbox-giftRow a', true);
    const giftRowDate = doc('.giftSelectorView-inbox-gift-sent', true);

    giftRow.forEach(g => {
        g.style['background'] = theme.secondaryDark;
        g.style['color'] = theme.white;
        g.style['border-bottom'] = 'none';
    })

    giftRowEven.forEach(g => {
        g.style['background'] = theme.tertiaryDark;
        g.style['color'] = theme.white;
    })

    giftRowLinks.forEach(g => {
        g.style['color'] = theme.blue;
    })

    giftRowDate.forEach(g => {
        g.style['color'] = theme.lgray;
    })

    //gift more gift
    const giftMore = doc('.giftSelectorView-content-rightBar', true);
    const giftMore2 = doc('.giftSelectorView-content-leftBar', true);

    const giftMoreLinks = doc('.giftSelectorView a', true);
    const giftMoreTabActive = doc('.giftSelectorView-tabHeader.active span');
    const giftMoreTabNotActive = doc('.giftSelectorView-tabHeader:not(.active) span', true);

    giftMore.forEach(g => {
        g.style['background'] = theme.secondaryDark;
        g.style['color'] = theme.white;
    })
    giftMore2.forEach(g => {
        g.style['background'] = theme.secondaryDark;
        g.style['color'] = theme.white;
    })

    giftMoreLinks.forEach(g => {
        g.style['color'] = theme.blue;
    })

    giftMoreTabActive.style['background'] = theme.secondaryDark;
    giftMoreTabActive.style['color'] = theme.white;
    giftMoreTabNotActive.forEach(g => {
        g.style['background'] = theme.lgray;
        g.style['color'] = theme.black;
    })

    const giftMoreDate = doc('.giftSelectorView-friend-sent', true);
    giftMoreDate.forEach(g => {
        g.style['color'] = theme.lgray;
    })

    const giftSelector = doc('.giftSelectorView-gift-padding', true);
    giftSelector.forEach(g => {
        g.style['color'] = theme.white;
        g.style['background'] = theme.tertiaryDark;
    })

    const giftSelectorFriend = doc('.giftSelectorView-friend', true);
    giftSelectorFriend.forEach(g => {
        g.style['color'] = theme.blue;
    })

    const giftSelectorFriendBg = doc('.giftSelectorView-friend > .giftSelectorView-friend-padding', true);
    giftSelectorFriendBg.forEach(g => {
        g.style['background'] = theme.tertiaryDark;
    })

    const giftSelectorFriedBgActive = doc('.giftSelectorView-friend.selected > .giftSelectorView-friend-padding', true);
    giftSelectorFriedBgActive.forEach(g => {
        g.style['background'] = theme.dgray;
        g.style['color'] = theme.black;
    })

    const giftSelectorFriedBgWarn = doc('.giftSelectorView-friend.warning > .giftSelectorView-friend-padding', true);
    giftSelectorFriedBgWarn.forEach(g => {
        g.style['background'] = theme.yellow;
        g.style['color'] = theme.black;
    })

    const giftSelectorFoot = doc('.giftSelectorView-actionContainer', true);
    giftSelectorFoot.forEach(g => {
        g.style['background'] = theme.mainDark;
    })

}

applyDarkModeBase();
document.addEventListener('DOMNodeInserted', applyDarkModeDynamic);
