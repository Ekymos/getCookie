# getCookieValue
Get value cookie

[![Build Status](https://app.travis-ci.com/Ekymos/getcookievalue.svg?branch=master)](https://app.travis-ci.com/Ekymos/getcookievalue)


## Config

You need to add specific data attributes to get cookie value.

```
data-get-cookie="true"
```

Them need add the name of the cookie with data attribute.

```
data-get-cookie-key: name of the cookie to need.
````

## Line commands to developer mode

Launch the first release

```
$ npm run release -- --first-release
```

Normal release

```
$ npm run release
```

Push change and generate tag

```
git push --follow-tags origin master
```

## Docs

[Cómo automatizar la subida de versiones a NPM](https://medium.com/@muzk/c%C3%B3mo-automatizar-la-subida-de-versiones-a-npm-6b0d66c633bc)
[Cómo crear y publicar un módulo para npm](https://sergiodxa.com/articles/crear-modulo-npm/)
