exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['E2econtactsTest.js'],
  baseUrl: 'http://localhost:8080'
}