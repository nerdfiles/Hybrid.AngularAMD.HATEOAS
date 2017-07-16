# Modules

## Module Directive Example

RequireJS makes it fairly simple to produce a module for one functional group,
yet re-use it elsewhere without escalating its integration to a higher order 
in the stack of dependencies or modules.

## Module Spec as Unit Test Example

## Module Presentation Layer Example

You style your module, and just include it:

    function module () {
    }
    define(['css!./index'], module)

You don't need to traverse your way up to integrate into some glorified,
ceremonious file that includes a bunch of other stuff. If you clobber the style,
hey guess what — you only clobbered it in your route anyway. So who's 
complainin'?
