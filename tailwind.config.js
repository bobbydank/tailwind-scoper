module.exports = {
  content: ['./src/dummy.html'], // You can keep a dummy path or minimal HTML file if you like.
  safelist: [
    // Example of patterns (regular expressions)
    // Include all padding utilities
    { pattern: /p-[1-9]/ },
    // Include all margin utilities
    { pattern: /m-[1-9]/ },
    // Include all text color utilities
    { pattern: /text-/ },
    // Include all grid utilities
    { pattern: /grid-cols-/, variants: ['responsive'] },
    // Include all flex utilities
    { pattern: /flex-(row|col)/, variants: ['responsive'] },
    // Use patterns to match a broader set of responsive utilities
    { pattern: /(sm:|md:|lg:|xl:|2xl:)?m-[1-9]/ },
    { pattern: /(sm:|md:|lg:|xl:|2xl:)?p-[1-9]/ },
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
  content: ['./src/dummy.html'],
  safelist: [
    {
      pattern: /./, variants: ['responsive']
    },
  ],
  theme: {}
}
*/