// @ts-check

/** @typedef {import("prettier").Config} Config */
/** @typedef {import('prettier').Options} Options */
/**
 * @template T
 * @typedef {object} Override
 * @property {string | string[]} files
 * @property {string | string[]} [excludeFiles]
 * @property {Options & T} [options]
 */
/**
 * @typedef {object} AstroOptions
 * @property {boolean} [astroAllowShorthand=false] - Enable/disable attribute shorthand if attribute name and expression are the same
 */

/**
 * @param {string} id
 * @param {string} [dep]
 * @returns {string[]}
 */
function resolve(id, dep) {
  try {
    if (dep) require.resolve(dep)
    return [require.resolve(id)]
  } catch {
    return []
  }
}

const cssorder = resolve('prettier-plugin-css-order', 'postcss')
const tailwindcss = resolve('prettier-plugin-tailwindcss', 'tailwindcss')
const astro = resolve('prettier-plugin-astro', 'astro')
const prisma = resolve('prettier-plugin-prisma', 'prisma')

/** @type {Override<AstroOptions>[]} */
const astroOverride = !astro.length
  ? []
  : [
      {
        files: '*.astro',
        options: {
          parser: 'astro',
          astroAllowShorthand: false,
          plugins: astro.concat(cssorder, tailwindcss),
        },
      },
    ]

/** @type {Config} */
module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxSingleQuote: false,
  printWidth: 100,
  quoteProps: 'as-needed',
  semi: false,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  plugins: cssorder.concat(tailwindcss, prisma),
  overrides: astroOverride,
}
