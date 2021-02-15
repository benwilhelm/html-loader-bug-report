# Bug Report: html-loader@2.0.0

When running webpack from the root directory, the build fails with `ReferenceError: URL is not defined`

```

ERROR in   Error: webpack://demo/./src/index.html?./node_modules/html-webpack-plugin/lib/loader.js:9
  var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bill.jpg */ "./src/bill.jpg  "), __webpack_require__.b);
                                   ^
  ReferenceError: URL is not defined

```

Downgrading `html-loader` to 1.3.2 seems to fix the issue.
