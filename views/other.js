import React from "react";
import { bindActionCreators } from "redux";
import { startClock, addCount, serverRenderClock } from "../store";
import { connect } from "react-redux";
import { Link } from "../routes";
import Clock from "../components/Clock";
import AddCount from "../components/AddCount";

class Counter extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer));
    store.dispatch(addCount());

    return { isServer };
  }

  componentDidMount() {
    this.timer = this.props.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const title = "OTHER";
    const { lastUpdate, light } = this.props;

    return (
      <React.Fragment>
        <h1>{title}</h1>
        <Clock lastUpdate={lastUpdate} light={light} />
        <AddCount />
        <div
          className="nav"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Link route="alt">Alt</Link>
          <Link route="home">index</Link>
          <Link route="another">Another</Link>
          <Link route="test">Test</Link>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  };
};

export default connect(state => state, mapDispatchToProps)(Counter);
