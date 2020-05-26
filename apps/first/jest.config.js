module.exports = {
  name: 'first',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/first',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
