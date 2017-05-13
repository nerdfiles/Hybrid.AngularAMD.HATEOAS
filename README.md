# Hybrid.angularAMD.HATEOAS


## Install

After cloning:

    $ npm i
    $ bower i

Review Grunt "strategies":

    $ grunt


## Strategies

*Stratgies* combine *Basics* and *Workflows* to achieve certain desirable configurations.

<img src="https://git.kpd-i.com/aalexander/Hybrid.angularAMD.HATEOAS/raw/master/resources/grunt-default.png" alt="Strategies layout"/>


### Vendor stuff

Here's an example of adding a vendor to the build:

    $ grunt add/vendor --layer=script --vendor=bower_components/angular-ui-router/release/angular-ui-router.js
    $ grunt setup
    $ grunt build

Removing vendors in similar fashion is easy:

    $ grunt remove/vendor --layer=script --vendor=bower_components/angular-route/angular-route.js
    $ bower uninstall angular-route --save
    $ grunt setup
    $ grunt build


## Testing

1. TODO RequireJS + karma


## Rationale

<blockquote>
<p>If the engine of application state (and hence the API) is not being driven by hypertext, then it cannot be RESTful and cannot be a REST API. Period. Is there some broken manual somewhere that needs to be fixed?</p>
<div><cite>Roy Fielding</cite></div>
</blockquote>

1. Hybrid: RequireJS Modules ➢ Cordova/Ionic
2. angularAMD: RequireJS Modules ➢ AngularJS Modules
3. HATEOAS: (ORM + RequireJS Modules) ➢ Evolvable Object-ive Representations of Relational Maps ([halberd][halberd] + `js-data` looks good enough; but hypermedia libraries already provide for storing representations, etc.)


## Other noteworthy points

1. TODO RequireJS Hot Swapping / Code-On-Demand
2. ngdocs on RequireJS
3. ngdocs on GruntJS (really modular tasks as basics and workflows)
4. Organic CSS
5. Optimized builds
6. TODO Layering: (RequireJS Modules + DualApi) ➢ Hypertext Passing
7. TODO [angular-hypermedia][angular-hypermedia] or [angular-hy-res][angular-hy-res]


[halberd]: https://github.com/jpbochi/halberd
[angular-hypermedia]: https://github.com/jcassee/angular-hypermedia
[angular-hy-res]: https://github.com/petejohanson/angular-hy-res
