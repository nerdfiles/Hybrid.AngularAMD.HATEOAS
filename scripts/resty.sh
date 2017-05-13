#!/bin/bash

function resty_set () {
  export REST_BASE=$1
}
alias resty.set=resty_set

# GET
function resty_get () {
  curl -v -H "Accept:application/json" $REST_BASE$1
}
alias GET=resty_get

# OPTIONS
function resty_options () {
  curl -i -X OPTIONS $REST_BASE$1
}
alias OPTIONS=resty_options

# DELETE
function resty_delete () {
  curl -i -X DELETE $REST_BASE$1
}
alias DELETE=resty_delete

# PUT
function resty_put () {
  curl -i -X PUT -H "Content-Type:application/json" $REST_BASE$1 -d $2
}
alias PUT=resty_put

# PATCH
function resty_patch () {
  curl -i -X PATCH $REST_BASE$1 -d $2
}
alias PATCH=resty_patch

# POST
function resty_post () {
  curl -i -X POST -H "Content-Type:application/json" $REST_BASE$1 -d $2
}
alias POST=resty_post

# TRACE
function resty_trace () {
  curl -v -X TRACE $REST_BASE$1
}
alias TRACE=resty_trace

# HEAD
function resty_head () {
  curl -i -X HEAD $REST_BASE$1
}
alias HEAD=resty_head


