# Molecule

Molecule files should include `organic-css` in order to access atoms.

```scss
// ./client/app/molecule/_molecule1.scss
@import "./vendor/organic-css/src/main"; // To use across modules.

@mixin ... @include atoms((...))

// ./client/app/module/module1/index.scss
@import "../../molecule/_molecule1.scss";

@include ... { ... }
```

Generally molecules can be used in `organelle`s or `module`s. Site-wide
`molecule`s would only require `@import` of new `atom`s.

