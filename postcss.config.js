module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-prefix-selector')({
      prefix: '.cl-tailwind-container',
      // Corrected transform function
      transform: function (prefix, selector) {
        // This checks if the selector is a global one like `html` or `body`
        if (selector.startsWith('html') || selector.startsWith('body')) {
          // If so, replace it with the prefix
          return selector.replace(/^html|^body/, `${prefix} $&`);
        }
        // For all other selectors, just prepend the prefix
        return `${prefix} ${selector}`;
      },
    }),
  ],
};
