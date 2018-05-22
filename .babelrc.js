module.exports = {
  "presets": [
    "react",
    "stage-2",
    ["env", {
      "useBuiltIns": "entry",
      "targets": {
        "browsers": ["last 2 versions"],
        "uglify": true
      }
    }]
  ],
  "plugins": [
    "transform-runtime",
    [
      "styled-jsx/babel",
      { "plugins": ["styled-jsx-plugin-sass"] }
    ]
  ]
}
