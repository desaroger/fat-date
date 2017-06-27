# fat-date
Utility to convert from date to FAT32 DateTime and vice versa. No dependencies.

Info in [forensicswiki.org/wiki/FAT](http://forensicswiki.org/wiki/FAT#FAT_date_and_time_values).

## Installation

```bash
$ npm i --save fat-date
```

## Usage

**From Date to Fat DateTime**

```js
let fatDate = require('fat-date');
let date = new Date('2013-07-13T06:13:50.000Z');
let fDate = fatDate.fromDate(date);
// fDate == 1122841017
```

**From Fat DateTime  to Date**

```js
let fatDate = require('fat-date');
let fDate = 1122841017;
let date = fatDate.fromFat(fDate);
// date == 2013-07-13T06:13:50.000Z
```
