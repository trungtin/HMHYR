import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Utils from './utils';
import '../style.css';

function showItIfShouldBe(target, self) {
  let targetRect = target.getBoundingClientRect();

  if (targetRect.top < self.position.top + Number.parseInt(self.position.height)/100 * window.innerHeight 
      && targetRect.top < window.innerHeight
      && targetRect.bottom > self.position.top + Number.parseInt(self.position.height)/100 * window.innerHeight) {

    if (HMHYR.displayingComponent === ReactDOM.findDOMNode(self).firstChild.id) {

      return updateItsPercentageCount(self);
    } else if (!HMHYR.displayingComponent) {
      updateItsPercentageCount(self)
      HMHYR.displayingComponent = 'hmhyr-' + self.keyId;

      if (!self.state.showing) {
        self.setState({showing: true});
      }
    }
  } else {
    if (HMHYR.displayingComponent === ReactDOM.findDOMNode(self).firstChild.id) {
      HMHYR.displayingComponent = null;
    }
    self.setState({showing: false});
  }
}

function updateItsPercentageCount(self) {

  let targetRect = self.target.getBoundingClientRect();
  let offset = self.props.offset === 'top' ? 0 : self.props.offset === 'bottom' ? 1 :
    (self.props.offset && self.props.offset.endsWith('%')) ? self.props.offset / 100 : 0.5;

  let percentage;
  if (offset * window.innerHeight <= targetRect.top) {
    percentage = '0%';
  } else if (offset * window.innerHeight >= targetRect.bottom) {
    percentage = '100%';
  } else {
    percentage = (offset * window.innerHeight - targetRect.top) / targetRect.height * 100 + '%';
  }

  self.setState({percentage})
}

export default class HMHYR extends Component {

  static displayingComponent = null

  static propTypes = {
    position: PropTypes.object,
    target: PropTypes.string,
    offset: PropTypes.string,
    children: PropTypes.object
  }

  constructor () {
    super();
    this.state = {
      showing: false,
      timeToRead: 0,
      percentage: 0
    };
    this.keyId = Math.round(Math.random() * 10000);
  }

  componentWillMount() {
    let initialPosition = {
      top: 10,
      left: 10,
      width: '90%',
      height: '5%'
    };
    let customPosition = {};
    for (let key of Object.keys(this.props.position)) {
      let value = this.props.position[key];
      let convertedValue = ( value > 1 || typeof value === 'string' && value.endsWith('%')) ? value : (value * 100) + '%';
      if ((typeof value === 'string' && !value.endsWith('%')) && Number.isNaN(convertedValue)) {
        throw Error('Position props is\'n valid');
      }
      customPosition[key] = convertedValue;
    }
    this.position = Object.assign({},initialPosition, customPosition);
  }

  componentDidMount() {
    this.target = this.props.target ? window.document.getElementById(this.props.target) : ReactDOM.findDOMNode(this.refs.child);
    console.log(this.target)
    if (!this.target) {
      throw Error('Either use \'target\' attribute or children to specific target');
    }
    if (typeof this.target === 'array') {
      throw Error('Only one child supported.');
    }

    this.wordCount = Utils.recursiveWordsCount(this.target);

    let timeToRead = (this.wordCount / 200);
    timeToRead = Math.floor(timeToRead) + ' minute' + (timeToRead >= 2 ? 's ' : ' ') + Math.round((timeToRead - Math.floor(timeToRead)) * 60 ) + ' seconds';

    this.setState({timeToRead});
    showItIfShouldBe(this.target, this);

    let lastScroll = 0;
    window.document.addEventListener('scroll', () => {
      if (window.scrollY - lastScroll > 10 || window.scrollY - lastScroll < -10) {
        lastScroll = window.scrollY;
        showItIfShouldBe(this.target, this)
      }
    });
  }

  render() {    
    return (
      <div>
        <div id={'hmhyr-' + this.keyId} style={{position: 'fixed', ...this.position}}>
          { this.state.showing && 

            <p>{this.state.timeToRead} {this.state.percentage}</p>
          }
        </div>
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

