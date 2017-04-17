import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import App from './app.jsx';

describe('root', function () {
  it('renders without problems', function () {
    var app = TestUtils.renderIntoDocument(<App/>);
    expect(app).toExist();
  });
});
