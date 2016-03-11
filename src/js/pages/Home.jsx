import React from 'react';
import { connect } from 'react-redux';
import { ROUTE_STATES } from '../constants/route-states';
import { setRouteState } from '../actions/route-actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(setRouteState(ROUTE_STATES.HOME));
  }

  render() {
    return (
      <div>
        <h1>Salute!</h1>
        <p>Thanks for stumbling on my little corner of the web! This site, as the name suggests, is all about me, CJ Davis. Though it sounds vain, that is the most accurate way I can describe this site. There is no specific purpose except to showcase to the internet anything I feel like showing.</p>
        <p>In the meantime you can check out my <a target='_blank' href='https://github.com/Crevax'>Github profile</a>, my <a target='_blank' href='http://www.flickr.com/photos/crevax/'>Flickr</a> albums, or follow me on <a target='_blank' href='https://twitter.com/crevax'>Twitter</a>.</p>
        <p>I also have a couple cool sites I'd like you to check out:</p>
        <ul>
            <li><a target='_blank' href='http://valor-zeal.org/'>Valor &amp; Zeal Gaming</a></li>
            <li><a target='_blank' href='http://dead-pixel.com/'>The Dead Pixel Show</a></li>
        </ul>
      </div>
    )
  }
}


function select(state) {
  return {
    routeState: state.RouteState
  }
}

export default connect(select)(Home);
