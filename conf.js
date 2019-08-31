exports.config = {
    // launch locally when fields directConnect and seleniumAddress are not provided
    chromeDriver: 'C:/Users/DURAI/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_76.0.3809.12.exe',
    seleniumServerJar: 'C:/Users/DURAI/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
    specs: ['E:\\PROTRACTOR DEMO\\JSFilesLocation\\NVKIDS\\SPEC\\googletest_spec.js'],
    capabilities: {
      browserName: 'chrome'
    }
  }