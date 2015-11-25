import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils';

describe('Boilerplate', function() {
  it('should do boilerplate things', function() {
    // TODO: test something now
    expect(true).to.equal(true);
  });
});

describe('DOM Tests', function () {
    var el = document.createElement('div');
    el.id = 'myDiv';
    el.innerHTML = '<div></div><p></p><img src="" />';
    el.style.background = '#ccc';
    document.body.appendChild(el);
    var myEl = document.getElementById('myDiv');

    it('is in the DOM', function () {
        expect(myEl).not.to.be.null;
    });
 
    it('is a child of the body', function () {
        expect(myEl.parentElement).to.be.equal(document.body);
    });
 
    it('has the right text', function () {
        expect(myEl.innerHTML).to.not.equal('Hi there!');
    });

    it('has at least 3 childs', () => {
      expect(myEl.children).to.have.length.of.at.least(3);
    });
 
    it('has the right background', function () {
        expect(myEl.style.background).to.equal('rgb(204, 204, 204)');
    });
});

describe('Words count function', () => {

  let {wordsCount, recursiveWordsCount} = require('../src/utils');
  let el = document.createElement('div');

  el.innerHTML = 'Hello what are<p>you doing</p><div>there</div>';

  it('should count properly', () => {
    expect(wordsCount(el)).to.equal(3);
  });
  it('should recursive count properly', () => {
    expect(recursiveWordsCount(el)).to.equal(6);
  })
});
