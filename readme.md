# cli-strlen

> Find the length of a line of text

[![Build Status](https://travis-ci.org/icyflame/cli-strlen.svg?branch=master)](https://travis-ci.org/icyflame/cli-strlen)

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)


## Install

```
$ npm install --save cli-strlen
```

## CLI

```
$ npm install --global cli-strlen
```
```
$ strlen --help

  Usage
    $ strlen [input]

  Examples
    $ strlen abcdefghijklmnopqrstuvwxyz
    26

    $ cat test.txt | strlen
    8
    # when test.txt contains the text: 'one line'

    $ echo 0123456789 | strlen
    10
```


## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
