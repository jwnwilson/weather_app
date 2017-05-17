import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import App from '../app.jsx';

describe('root', function () {
  it('renders without problems', function () {
    var app = TestUtils.renderIntoDocument(<App/>);
    expect(app).toExist();
  });
  it('contains inputWidget', function () {
    var app = TestUtils.renderIntoDocument(<App/>);
    var inputWidget = TestUtils.findRenderedDOMComponentWithClass(
      app, 'inputWidget');
    expect(inputWidget).toExist();
  });
  it('contains outputWidget', function () {
    var app = TestUtils.renderIntoDocument(<App/>);
    var inputWidget = TestUtils.findRenderedDOMComponentWithClass(
      app, 'outputWidget');
    expect(inputWidget).toExist();
  });
});
