//jshint strict: false
exports.config = {
  
  allScriptsTimeout: 11000,

  // specs: [
  //   'e2e/*.js'
  // ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/app.e2e-spec.js']

};