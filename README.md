# fat-date
Utility to convert from date to FAT32 DateTime and vice versa

## Installation

```bash
$ npm i --save fat-date
```

## Usage

**From Date to Fat DateTime**

```NodeJs
let fatDate = require('fat-date');
let date = new Date('2007-12-31T04:06:01.000Z');
let fDate = fatDate.fromDate(date);
// fDate == 549533567
```

**From Fat DateTime  to Date**

```NodeJs
let fatDate = require('fat-date');
let fDate = 549533567;
let date = fatDate.fromFat(fDate);
// date == 2007-12-31T04:06:01.000Z
```
