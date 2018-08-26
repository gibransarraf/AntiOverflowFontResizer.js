# AntiOverflowFontResizer.js

Avoid long words breaking your page overflowing its container or even the screen.

**Check out the <a href="https://gibransarraf.com/antioverflowfontresizer/" target="_blank">demo here</a>.**  
Just resize the window as much as you want and check it, you can open the console to see what's happening.  

I came up with this code to solve a project's problem because I couldn't find a simple and flexible script already done. So if you want, you can <a href="https://www.paypal.me/GibranSarraf/" target="_blank">![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)</a>

## What AntiOverflowFontResizer.js does

Texts are designed with an ideal font size for each breakpoint but sometimes a long word can ruin everything.

This can happen a lot if you work on the design of a page that will be a multilanguage site for example.

## How it works

```javascript
$('your-element').FluidFontType();
```

### On page load

1. **Gets current font size and set it as the maximum font size**
2. **Measures text's container width**
3. **Measures minimum text's content width**  
If a word is wider than the container, it's width will be the text minimum width measure, otherwise, it would be the same as the container.
- **Checks if overflow is true comparing both widths**  
If that's true, continue
1. **Calculates the proper font size value so the longest word fit in the container** doing a simple cross-multiplication:  
`fontSize = contWidth * maxFontSize / textWidth`
2. **Reduces the text font size**

### On window resize

- **Checks if text container changed since the load, or a previous window resize**  
If that's true, continue
1. **Resets font-size**  
In case the code has already set an inline font-size CSS property
2. **Gets current font size and set it as the new maximum font size**  
Here you will get the font-size set in the CSS for that breakpoint.
3. **Measures minimum text's content width**
- **Checks if overflow is true comparing both widths**  
If that's true, continue
1. **Calculates the proper font size**
2. **Reduces the text font size**

## Configuration

There's **no need to configure anything**, the script checks the text's current `font-size` on each breakpoint and adjusts it if necessary.

### Fit an entire phrase inside the container

Put this option on `true` and the code will adjust the font size so the whole phrase fits in the container.

```javascript
$('your-element').FluidFontType({
    phraseMode: true
});
```

> **Note:** If the text has CSS property `white-space:  nowrap;` already, then the code will adjust the font size to fit the whole text and it's not necessary to turn this feature ON.