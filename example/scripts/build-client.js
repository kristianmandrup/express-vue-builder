const {build} = require('vue-webpack');
const {VueBuilder} = require('vue-builder');

let options = build({
  env: process.env.NODE_ENV,
  mode: 'client',
  inputFilePath: `${__dirname}/../app/client-entry.js`,
  outputPath: `${__dirname}/../../dist/client`,
  publicPath: '/'
});

let builder = new VueBuilder(options);
builder.build().catch(console.log);
