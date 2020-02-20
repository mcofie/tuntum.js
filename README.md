# Tuntum.js 
A light weight JavaScript Library that helps you switch/toggle from Light Theme to Dark theme on
a web page.

### How to Install
It is very simple to add the Tuntum.js to your application. 

```js
   let options = {
        isDark: true,
        isLight: false,
        lightPath: "./fitaa.css",
        darkPath: "./tuntum.css",
        saveState: false
    };
    
    let tuntum = new Tuntum(options);
    tuntum.build();
```


### Framework 
List of parameters in option object

| Parameter |  Definition |
| :-------: | :---------: |
| isDark    |  Sets the default state as Dark theme     |
| isLight   |  Sets the default state as Light theme    |
| lightPath |  Specifies the path to the light CSS file |
| darkPath  |  Specifies the path to the dark CSS file  |
| saveState |                                           |



| Function |  Definition |
| :-------: | :---------: |
| setCurrentThemeState()    |      |
| getCurrentThemeState()    |      |
| setPersistedThemeState()  |      |
| getPersistedThemeState()  |     |
| destroyPersistedThemeState() | |








