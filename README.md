# @xeraph-dev/prettier-config

## Installation

_No need to install the *prettier* package_

```shell
npm install --save-dev @xeraph-dev/prettier-config
```

### To format astro files

```shell
npm install --save-dev astro
```

### To format tailwind classnames

```shell
npm install --save-dev tailwindcss
```

## Configuration

### Extend via _package.json_

```json
{
  // ...
  "prettier": "@xeraph-dev/prettier-config"
  // ...
}
```

### Extend via _.prettierrc.cjs_

```javascript
/** @type {import("prettier").Config} */
module.exports = {
  ...require('@xeraph-dev/prettier-config'),
  // your custom config
}
```

## Plugins used

- [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)
- [prettier-plugin-css-order](https://github.com/Siilwyn/prettier-plugin-css-order)
- [prettier-plugin-prisma](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [prettier-plugin-tailwindcss](https://github.com/avocadowastaken/prettier-plugin-prisma)
