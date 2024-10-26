# theong-country-flags
This project provides a list of countries with their respective flags.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

To install the dependencies, run:

```sh
npm install theo-country-flags --save
```
## Usage
To build the project, run:

```sh
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countries from 'theo-country-flags'

function CountrySelector() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return <Select options={options} value={value} onChange={changeHandler} />
}

export default CountrySelector
```
