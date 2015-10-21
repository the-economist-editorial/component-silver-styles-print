import React from 'react';
import SilverChartWrapper from '@economist/component-silver-chartwrapper';
export default class SilverStylesPrint extends React.Component {

  // PROP TYPES
  static get propTypes() {
    return {
      data: React.PropTypes.object,
      dimensions: React.PropTypes.object,
      test: React.PropTypes.string,
      getSvg: React.PropTypes.bool,
    };
  }
  // PROP TYPES ends

  // DEFAULT PROPS
  static get defaultProps() {
    return {
      getSvg: false,
    };
  }
  // DEFAULT PROPS ends

  // CONSTRUCTOR
  //    bind handleResize to this component
  //    set default state
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }
  // CONSTRUCTOR ends

  // COMPONENT DID MOUNT
  componentDidMount() {
  }
  // COMPONENT DID MOUNT ends


  // RENDER
  // A note on structure. There's an outermost-wrapper to
  // wrap *everything*. Then the mainouter-wrapper holds the main content;
  // and there's a sticky footer-wrapper at the bottom...
  render() {
    const data = this.state.data;
    return (
      <SilverChartWrapper data={data} getSvg={this.props.getSvg}/>
    );
  }
  // RENDER ends
}
