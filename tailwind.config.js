module.exports = {
  content: ['./path/to/dummy.html'], // You can keep a dummy path or minimal HTML file if you like.
  safelist: [
    // Example of patterns (regular expressions)
    // Include all padding utilities
    { pattern: /p-[1-9]/ },
    // Include all margin utilities
    { pattern: /m-[1-9]/ },
    // Include all text color utilities
    { pattern: /text-(red|green|blue)-(100|200|300|400|500|600|700|800|900)/ },
    // Include all grid utilities
    { pattern: /grid-cols-/, variants: ['responsive'] },
    // Include all flex utilities
    { pattern: /flex-(row|col)/, variants: ['responsive'] },
  ],
  theme: {
    // your theme configurations
  },
  plugins: [
    // your plugins
  ],
}

/*
module.exports = {
  safelist: [
    {
      pattern: /./, // the "." means "everything"
    },
  ],
  theme: {}
}
*/