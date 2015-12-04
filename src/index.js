import React, {Component, PropTypes} from 'react';
import findDOMNode from 'react/lib/findDOMNode';
import Utils from './utils';
import {canUseDOM} from 'fbjs/lib/ExecutionEnvironment'
if (canUseDOM) {
  require('./style/style.scss');
}

/**
 *
 * When two or more components all in valid area for display, one can take over control and force others hidden.
 *
 */
function forceTakeOver(self) {
  HMHYR.displayingComponent.setState({showing: false})
  HMHYR.displayingComponent = self;
  self.setState({showing: true});
}

/**
 *
 * Main function for checking if component in valid area for display progress-bar.
 *
 */
function showItIfShouldBe(targetRect, self) {

  if (targetRect.top < self.area.bottom
      && targetRect.bottom > self.area.top) {

    if (HMHYR.displayingComponent && HMHYR.displayingComponent.keyId === self.keyId) {

      return updateItsPercentageCount(targetRect, self);
    } else if (!HMHYR.displayingComponent) {

      updateItsPercentageCount(targetRect, self)
      HMHYR.displayingComponent = self;

      if (!self.state.showing) {
        self.setState({showing: true});
      }
    } else if (window.document.getElementById('hmhyr-' + HMHYR.displayingComponent.keyId).getBoundingClientRect().bottom < self.area.center) {

      forceTakeOver(self)
    }
  } else {
    if (HMHYR.displayingComponent && HMHYR.displayingComponent.keyId === self.keyId) {
      HMHYR.displayingComponent = null;
    }
    if (self.state.showing) {
      self.setState({showing: false});
    }
  }
}

function updateItsPercentageCount(targetRect, self) {

  let percentage;
  if (self.area.center <= targetRect.top) {
    percentage = 0;
  } else if (self.area.center >= targetRect.bottom) {
    percentage = 1;
  } else {
    percentage = (self.area.center - targetRect.top) / targetRect.height;
  }
  if (self.state.showing) {
    self.refs.overlay.style.transform = 'scaleX(' + percentage + ')';
  }
}

export default class HMHYR extends Component {

  static displayingComponent = null
  static componentId = 0

  static propTypes = {
    area: PropTypes.object,
    children: PropTypes.object,
    overlayStyle: PropTypes.object,
    static: PropTypes.bool,
    style: PropTypes.object,
    target: PropTypes.string,
    timeCounter: PropTypes.bool,
    title: PropTypes.string
  }

  constructor () {
    super();
    this.state = {
      showing: false,
      timeToRead: 0,
      percentage: 0
    };
    this.keyId = HMHYR.componentId++;
    this.wordCount = 0;

  }

  componentWillMount() {
    const initialStyle = {
      position: 'fixed',
      top: 20,
      left: 20,
      width: '90%'
    };

    this.style = Object.assign({},initialStyle, this.props.style || {});
  }

  componentDidMount() {
    this.target = this.props.target ? window.document.getElementById(this.props.target) : findDOMNode(this.refs.child);
    if (!this.target) {
      throw Error('Either use \'target\' attribute or children to specific target');
    }
    if (typeof this.target === 'array') {
      throw Error('Only one child supported.');
    }

    this.wordCount = Utils.recursiveWordsCount(this.target);

    let timeToRead = (this.wordCount / 200);
    timeToRead = Math.floor(timeToRead) + ' minute' + (timeToRead >= 2 ? 's ' : ' ') + Math.round((timeToRead - Math.floor(timeToRead)) * 60 ) + ' seconds';

    // Where should I use setState if not here?
    this.setState({timeToRead});

    let customArea = {...{
      top: '20%',
      center: '50%',
      bottom: '60%'
    }, ...(this.props.area || {})}

    this.area = {};
    for (let key of ['top', 'center', 'bottom']) {
      let value = customArea[key];
      this.area[key] = (typeof value === 'string' && value.endsWith('%')) ? Number.parseInt(value) / 100 * window.innerHeight : Number.parseInt(value);
      if (Number.isNaN(this.area[key])) {
        throw Error('Value of area.' + key + ' is invalid');
      }
    }

    showItIfShouldBe(this.target.getBoundingClientRect(), this);

    let lastScroll = 0;
    window.document.addEventListener('scroll', () => {
      if (window.scrollY - lastScroll > 5 || window.scrollY - lastScroll < -5) {
        lastScroll = window.scrollY;
        showItIfShouldBe(this.target.getBoundingClientRect(), this)
      }
    });
  }

  render() {    
    return (
      <div id={'hmhyr-' + this.keyId}>
        { this.props.static === true &&
          <div className="progress-bar" style={this.style}></div>
        }
        { this.state.showing && 
          <div className="progress-bar" style={this.style}>
            <h3>{ this.props.title }</h3>
            <p>{ this.props.timeCounter === true && this.state.timeToRead }</p>
            <div className="progress-bar-overlay" ref="overlay" style={this.props.overlayStyle}></div>
          </div>
        }
        { (typeof this.props.children === 'array' &&
            <div ref="child">
              { React.Children.map(this.props.children, (element, idx) => {
                return React.cloneElement(element, { ref: 'child-' + idx });
              }) }
            </div>
          ) ||
          ( this.props.children &&
            React.cloneElement(this.props.children, { ref: 'child' })
          )
        }
      </div>
    );
  }
}

