# Atom

There's a lot of mix up here. You're going to find mixins, placeholders, and
`define-atom` uses here. The lastmost artifact simply created a placeholder for
later use within an `@include` that conditions the existence of the complex
property:value construction corresponding to the atom so defined. 

The confusion is partly because we initially assumed that Tachyons could do 
something they actually could not, or rather that SASS could provide a feature 
that involved using classes or even placeholders inside of `atom` mixins. In 
any event, we want Atomic SASS, but since such a term could confuse our reader, 
given that one could theoretically make a configurable mixin for every CSS 
property, etc., we have to express something more specific, namely the 
framework we have adopted: *organic CSS*. 

We don't want "declarative classes" littered throughout our HTML, despite how
seemingly intuitive that seems. And of course they could be minified, we
suppose, but the problem is deeper than this. We want a way to develop our front
ends in a modular way. If we pin our HTML files down with some assortment of CSS
classes, we're not only stuck in a namespace, but also stuck with a particular
implementation in some other source document. The problem encountered is the
separation of concerns. It isn't simply that some source code is littered inside
of some other source code, but that the namespaces are co-mingled in such a way
as not to make either one clear. Sometimes we use BEM. Sometimes we use SMACSS.
Sometimes we use Atomic CSS. Sometimes we just call things like we see them.
Sometimes we use ID selectors. Sometimes we inherit the nomenclatures of
existing schools of design or print, and so on.

An application's UI should potentiate its own semantics. We should not style by
element, but we also do not want the strictness of styling everything by ID.
It's the way of thinking involve in that capacity of development. It makes
siloing nearly mandatory. It makes understanding a codebase an act of prying
into another person's mind. How can we bring "common ownership" to development
practices more easily? A first step is actually not to allow classes in our HTML
at all, but to say the least, making the practice standardizable in some way.
We've seen efforts of this sort: OOCSS, BEM, etc. However, the main problem is
not addressed: common ownership. Even if one understands how another developer
has implemented a range of ID selectors, next it is a matter of re-using that
code. Do we copy-and-paste? How do we express the intent that code is DRY? That
is, it is intended to be re-used and is common? A common style library like
Bootstrap isn't about common ownership — it does not promote it, for its goal is
to increase the proliferation of ideas, not teams. Bootstrap has to be hacked or
worked around, or typically we look at these libraries as affording some
features, while avoiding others. How do we evolve a codebase with the common
understanding of those things we are supposed to choose? Bringing in a library
of tools like Bootstrap may provide some new UI features, but prompts the
question: _When should this feature actually not be determined by the library?_

We want organics. BEM helps, but that is merely a naming scheme. At the same
time, we want not to clobber other cascading styles. We need modularity, and
while BEM promotes such a feature, defining atoms is a practice that asserts:
"Re-use me! I'm DRY!" An atom can be used in an ID selector. It can be used in a
BEM class. It can be used anywhere, since it is, at the build of the SASS,
treated as a placeholder. It's "on-demand," and DRY. The question is where do we
put such code, if we should anyway? Well, that's where the modularity question
turns on its head.

You can put style code anywhere, but out of convention and convenience, we drop
it in one folder because we do not want to scan nested directories. Typically
CSS and JS have been droppped into one massive file and allowed to grow to
excessive lengths. We see something similar to this happening within the Gulp
stack, along with the proliferation of anonymous functions which do heavy work.
The practice of naming things is becoming minimized, which raises the question
of whether or not the "hard problems" of computer science are human generated or
actually features at some world. Philosophical problems aside, our problem for
CSS is that as soon as CSS codebases become "big," they're at once "too big."
How do we get to a point where multiple developers can learn best practices
(avoid ID selectors) but accelerate development (use ID selectors for everything)
in a harmonious way?

Organicism! An intentional moment that says "re-use me!" An ID selector will
almost always look and feel like it was meant for one purpose, and no matter how
complex a BEM class my be named, its properties may still seem bound to its
application. Neither can really be "plugged in" elsewhere. Mixins can do this,
but there is an air of the feeling that they too have a kind of special purpose. 
There's a bit of ceremony inherent to mixins.

Introduce `atomic mixins`. It's small, it's harmless, it's inviting. It has a
special name, and it can be plugged in anywhere. It promotes smaller files, and
clearly specified application. Evolvution is inevitable. With mixins, the
overall CSS codebase can be perceived as antifragile — it'll only get better
with battletesting as each atom jostles about getting renamed, copied, re-used,
and so on.

So technically atoms can be constructed out of placeholders, and normal and
atomic mixins. However, they uniquely must not be constructed out of classes 
or IDs. Things which named via classes or IDs are styled in virtue of
placeholders and mixins. The goal here is that classes and IDs are merely names
for selections of placeholders and mixins, particularly atomic mixins. Styling
the name directly is just as much codesmell as styling the element, even with
considerations like "scopes," because we are addressing the problem of common
ownership, not co-existence of namespaces. Most development experiences do not
involve developers risking clobbering each other in the global namespace, but
rather siloing themselves so rigidly such that their code, while readable, is
nearly unusable because it is tightly coupled to its skeuomorph or task or
project. The developer goes out of their way to say "this is one-time code" at
some arbitrary point after the team agrees to a library or framework, but at
that departure from the common agreement there can be created a wedge that
becomes a chasm just as quickly as if no common system had been agreed upon.
Inevitably certain things have to be overriden or `!important` is wielded at
times of urgency. So our question then turns on — let's not just share code, but
share the problems we face when embattled with code. How do we evolve together
even if we are not joined in any perceivable way? Definitions!

Plato's Socrates was right all along. Define your terms! Know thyself!
