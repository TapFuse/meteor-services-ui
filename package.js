Package.describe({
  name: 'tapfuse:services-ui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A plugable UI for microservices.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/TapFuse/meteor-services-ui',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    // Core
    api.use([
      'templating',
      'ecmascript'
    ]);
    // 3rd party
    api.use([
      'lauricio:less-autoprefixer@2.5.0_3',
      'mquandalle:jade@0.4.5',
      // UI Base
      'ox2:font-roboto-condensed@1.13.0',
      'ox2:font-roboto@1.15.0',
      'ox2:normalize@3.0.2_1',
      'ox2:typography@1.2.0',
      'ox2:colors@1.4.0',
      'ox2:buttons@1.3.0'
    ]);
    api.addFiles('lib/tp-services-ui.jade', C);
    api.addFiles('lib/tp-services-ui.less', C);
    api.addFiles('lib/tp-services-ui.js', C);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tapfuse:services-ui');
  api.addFiles('tests/package-tests.js');
});
