# Tuntum.js 
A light weight JavaScript Library that helps you switch/toggle from Light Theme to Dark theme on
a web page.

_Library capabilities_ 
1. It takes two CSS files thus the `light` theme CSS and the `dark` theme CSS
2. It persists or stores the preferred theme of the user/client browser
3. Automatically selects the appropriate theme based on the systems preference


### How to Install

---
It is very simple to add the **Tuntum.js** to your application. 

You can install this from npm by running this command: 
```
    npm i tuntum --save
```


You can now add this your `index.html` file or any other file.
```html
    <script src='tuntum.js'> </script>
```

```js
   // Default option
   let options = {
        isDark: true,
        isLight: false,
        lightPath: "./fitaa.css",
        darkPath: "./tuntum.css",
        saveState: false
    };
    
    //Instantiate the Tuntum class
    let tuntum = new Tuntum(options);
    tuntum.build();
```


### Framework 

---
List of parameters in `options` object and the 

| Parameter |  Definition |
| :-------: | :---------: |
| isDark    |  Sets the default state as Dark theme     |
| isLight   |  Sets the default state as Light theme    |
| lightPath |  Specifies the path to the light CSS file |
| darkPath  |  Specifies the path to the dark CSS file  |
| saveState |  Saves the selected state in localstorage |

***
List of functions on the tuntum class

| Function |  Definition |
| :-------: | :---------: |
| setCurrentThemeState()    |  Sets the current theme state (light/dark)  selected   |
| getCurrentThemeState()    |  Provides the current theme state    |
| setPersistedThemeState()  |  Sets the theme state to persist   |
| getPersistedThemeState()  |  Get the persisted them state  |
| destroyPersistedThemeState() | Clear the persisted state |


### Todo

---
1. Switch theme state based on the `startTime` and `endTime` 
2. Automatically re-theme a web page from a single stylesheet






