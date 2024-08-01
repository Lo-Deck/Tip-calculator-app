# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person


### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Tip-calculator-app/blob/main/screenshot/Tip%20calculator%20app-mobile.png).
![screenshot desktop](https://github.com/Lo-Deck/Tip-calculator-app/blob/main/screenshot/Tip%20calculator%20app-desktop.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Tip-calculator-app).
- Live Site URL: [Website](https://lo-deck.github.io/Tip-calculator-app/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS


### What I learned

I leaned how to set different value with `input` and calculate some results and display it in `output`.

```js
inputPeople.addEventListener('keyup', () => {

    if(inputAmount.value && inputPeople.value && tips !== 0)
    {
        bill(inputAmount.value , tips, inputPeople.value);
    }

});
```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.