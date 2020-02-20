/**
 * Author: Maxwell Cofie
 * Date: 13th February 2020
 * Purpose: DarkTheme/LightTheme for web
 */


const head = document.getElementsByTagName('head')[0];
let STATE = "THEME_STATE";

//Default options properties
// var options = {
//     isDark: true,
//     isLight: false,
//     lightPath: "./fitaa.css",
//     darkPath: "./tuntum.css",
//     saveState: true
// };


//Class declaration
class Tuntum {
    constructor(options) {
        this.options = options;

        //Set theme based on system default theme mode
        const systemState = this.getSystemPreferredColorScheme();
        options.isDark = systemState;
        options.isLight = !systemState;
    }

    // Initialize stylesheets
    initialSetUp = (options = this.options) => {
        if (options.saveState) {
            this.setFilePath(this.getPersistedThemeState())
        } else {
            this.setFilePath(this.getCurrentThemeState())
        }
    };

    build = () => {
        this.initialSetUp();
    };

    // Used to toggle between stylesheets
    setCurrentThemeState = (isDark) => {
        this.options.isDark = isDark;
        this.options.isLight = !isDark;

        if (isDark) {
            this.setPersistedThemeState("dark");
            this.modifyThemePath(this.options.darkPath);
        } else {
            this.setPersistedThemeState("light");
            this.modifyThemePath(this.options.lightPath);
        }
    };

    // Toggle the stylesheet to render based on the ID
    modifyThemePath = (url) => {
        document.getElementById('tuntum-js').href = url;
    };

    setProperties = (type, url) => {
        // Create link element in head of DOM
        const createdLink = document.createElement('link');
        createdLink.id = 'tuntum-js';
        createdLink.type = 'text/css';
        createdLink.rel = 'stylesheet';
        createdLink.href = url;

        if (head.getElementsByTagName('link')[0])
            head.insertBefore(createdLink, head.getElementsByTagName('link')[0]);
        else head.appendChild(createdLink)

    };


    // Set the appropriate file path based on state
    setFilePath = (state) => {
        switch (state.toUpperCase()) {
            case "LIGHT":
                this.setProperties(state, options.lightPath);
                break;
            case "DARK":
                this.setProperties(state, options.darkPath);
                break;
            default:
                this.setProperties("dark", options.darkPath);
                break;
        }
    };


    //Determine System Color Schemes
    getSystemPreferredColorScheme = () => {
        if (!window.matchMedia) {
            return false;
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return true;
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            return false;
        }
    };

    // Persist the theme state if option is set
    setPersistedThemeState = (themeState) => {
        window.localStorage.setItem(STATE, themeState)
    };

    // Get persisted theme state from localstorage
    getPersistedThemeState = () => {
        return window.localStorage.getItem(STATE)
    };
 
    destroyPersistedThemeState = () => {
        window.localStorage.removeItem(STATE)
    };

    //Get current theme state
    getCurrentThemeState = () => {
        if (options.isLight) {
            return "light";
        } else if (options.isDark) {
            return "dark";
        } else {
            return "dark";
        }
    }

}


