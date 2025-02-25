# Semantic Material

Semantic Material is intended to be a CSS only framework. Meaning that it primarily relies on simple CSS. It can use Javascript and more advanced CSS techniques but that will be seperated out to it's own layer to be imported as needed. Ideally the base Semantic Material output of simple CSS can be used for a wide range of projects.

One of the desires of Semantic Material is to allow updating the look of an application with the change of a css stylesheet. To understand this effect the website [CSS Zen Garden](https://csszengarden.com) is one of the best online examples of this capability. It shows the power of properly embracing the original seperation of concerns created for CSS styling, HTML content, and Javascript interactivity.

## Unique Class Addressing (UCA) Methodology

Semantic Material also uses what is called UCA or Unique Class Addressing to target elements through the class attribute of elements with the intention of allowing the class to convey meaning rather than implementation details. It is acknowledged that this ideal is not alway possible or practical, so the emphasis is to use the methodology as a primary guide. Then allowing the developer to opt-out when the situation calls for it. However, these execptions should be rare and very specific, not the norm.

- use a minimum of three classes per selector address
  - NOTE: There are a few exceptions to this (ex: using `>` selectors)
- avoid single class names
  - this can create unexpected / inconsistent CSS styling
  - there are expections to this (ex: `error`, `warning`, `hide`, etc)
  - however, this should be used vary sparingly
- avoid styling using elements
  - this is so multiple design can co-exist by being namespaced on a root element
- use a prefix for the style
  - helps with a minimum of three classes guideline
  - helps with co-existence of multiple looks
  - some ui frameworks might allow setting the prefix on component or app level (NOTE: research this...)

```
mui app ui display
mui normal ui button
mui common ui button

// by theme
mui common ui button
fm-ui common ui button
ui-kit common ui button
```

- **TODO:** research way to allow prefixed looks to be overwritten...
  - probably will require use of the a build tool like [LessCss](https://lesscss.org/#)
  - might be possible with variable usage?

```
mui common ui button        // <-- with material 3 look
mui common ui button        // <-- with formantic ui look
mui common ui button        // <-- with ui-kit look
```

## Unifying Design Systems

Semantic Material attempts (not possible in all circumstances) to unify the language and expectations of several design systems out there. The base is to work with Material 3 Design since this design system has a lot of thought placed in ensuring a consistent look across a variety of devices.

The hope for Semantic Material is that this unification will not end with what is provide by the project by default but that others might take the opportunity to bring in their favorite look from other design systems.

Semantic Material was intended to reference:

- [Material Design 3](https://m3.material.io/)
  - designed for visual consistency across devices
  - designed for accessability
  - very well documented
- [Formantic UI](https://fomantic-ui.com/)
  - A fork of [Semantic UI](https://semantic-ui.com/) but tries to stay up to date
  - a wide variety of custom components built ontop of common components
  - interesting ideas around how to handle complex mobile scenarios (ex: tables)
  - the original inspiration around UCA method
    - note that Semantic Material diverts from Semantic UI's method in that:
      - using short and concise text rather than full enlish phrases or senetences
      - doing so should work nicely with UCA mehtod
      - tries to use atomic / utility / variant names only when needed as an exception
- [UiKit](https://getuikit.com/)
  - minimalism, simplicty, and consistency
  - intention to allow designers to build on top of the minimal design

Some other design systems of note or to possibly consider in the future:

- [Adobe's Spectrum](https://spectrum.adobe.com/)
- [Microsoft's Fluent 2](https://fluent2.microsoft.design/)
- [IBM's Carbon Design System](https://carbondesignsystem.com/)
- And many more... (just search Google)

### Variants

**TODO:** Come up with guidelines on how to deal with variants between design systems.

## Resources

- [Css Zen Garden](https://csszengarden.com/)
- [Semantic UI](https://semantic-ui.com/)
- [BeerCSS](https://www.beercss.com/)
