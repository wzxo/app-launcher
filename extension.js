const Main = imports.ui.main;
const PopupMenu = imports.ui.popupMenu;
const Util = imports.misc.util;

function init() {}

// Functions to start programs
function _terminal() {
    Util.spawn(['gnome-terminal']);
}

function _nautilus() {
    Util.spawn(['nautilus']);
}

function _evince() {
    Util.spawn(['evince']);
}

function _sysmonitor() {
    Util.spawn(['gnome-system-monitor']);
}

function _appmang() {
    Util.spawn(['gnome-control-center', 'applications']);
}

function _appstore() {
    Util.spawn(['gnome-software']);
}

function _disks() {
    Util.spawn(['gnome-disks']);
}


function enable() {
    this.mainMenu = Main.panel.statusArea['aggregateMenu'].menu;

    // creates the menu slot
    // I really wanted to call themeMenu "appMenu" but when I did that the extension would break so it'll stay themeMenu for now
    this.themeMenu = new PopupMenu.PopupSubMenuMenuItem("Launch Apps", true);
    this.mainMenu.addMenuItem(themeMenu, 7);
    this.themeMenu.icon.icon_name = "utilities-terminal-symbolic";
    
    // creates the menu items
    this.item1 = new PopupMenu.PopupMenuItem("Terminal");
    this.item2 = new PopupMenu.PopupMenuItem("Files");
    this.item3 = new PopupMenu.PopupMenuItem("Document Reader");
    this.item4 = new PopupMenu.PopupMenuItem("Task Manager");
    this.item5 = new PopupMenu.PopupMenuItem("Application Preferences");
    this.item6 = new PopupMenu.PopupMenuItem("App Store");
    this.item7 = new PopupMenu.PopupMenuItem("GNOME Disks");
    this.item1.connect('activate', () =>  _terminal());
    this.item2.connect('activate', () =>  _nautilus());
    this.item3.connect('activate', () =>  _evince());
    this.item4.connect('activate', () =>  _sysmonitor());
    this.item5.connect('activate', () =>  _appmang());
    this.item6.connect('activate', () =>  _appstore());
    this.item7.connect('activate', () =>  _disks());
    this.themeMenu.menu.addMenuItem(this.item1, 0);
    this.themeMenu.menu.addMenuItem(this.item2, 1);
    this.themeMenu.menu.addMenuItem(this.item3, 2);
    this.themeMenu.menu.addMenuItem(this.item4, 3);
    this.themeMenu.menu.addMenuItem(this.item5, 4);
    this.themeMenu.menu.addMenuItem(this.item6, 5);
    this.themeMenu.menu.addMenuItem(this.item7, 6);
}

function destroyobj(q) {
    if (q) {
        q.destroy();
        q = 0;
    }
}

function disable() {
    destroyobj(this.item1);
    destroyobj(this.item2);
    destroyobj(this.item3);
    destroyobj(this.item4);
    destroyobj(this.item5);
    destroyobj(this.item6);
    destroyobj(this.item7);
    destroyobj(this.themeMenu);
}
