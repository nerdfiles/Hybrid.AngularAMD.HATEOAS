# Hybrid.angularAMD.HATEOAS

<blockquote>
<p>If the engine of application state (and hence the API) is not being driven by hypertext, then it cannot be RESTful and cannot be a REST API. Period. Is there some broken manual somewhere that needs to be fixed?</p>
<div><cite>Roy Fielding</cite></div>
</blockquote>

1. Hybrid: RequireJS Modules ➢ Cordova/Ionic
2. angularAMD: RequireJS Modules ➢ AngularJS Modules
3. HATEOAS: (ORM + RequireJS Modules) ➢ Evolvable Object-ive Representations of Relational Maps ([halberd][halberd] + `js-data` looks good enough; but hypermedia libraries already provide for storing representations, etc.)

## Install

After cloning:

    $ npm i
    $ bower i

Review Grunt tasks:

    $ grunt

## Testing

1. TODO RequireJS + karma

## Other noteworthy points

1. RequireJS Hot Swapping / Code-On-Demand
2. ngdocs on RequireJS
3. ngdocs on GruntJS (really modular tasks as basics and workflows)
4. Organic CSS
5. Optimized builds
5. Layering: (RequireJS Modules + DualApi) ➢ Hypertext Passing
6. TODO `ui-router` + [angular-hypermedia][angular-hypermedia] or [angular-hy-res][angular-hy-res]

[halberd]: https://github.com/jpbochi/halberd
[angular-hypermedia]: https://github.com/jcassee/angular-hypermedia
[angular-hy-res]: https://github.com/petejohanson/angular-hy-res
