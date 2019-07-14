import { connect } from 'react-redux';
import JsonPageComponent from './JsonPageComponent';

const mapDispatchToProps = (dispatch) => ({
  handleAddWatcher: () => console.log('add watcher handler not implemented yet')
});


export default connect(null, mapDispatchToProps)(JsonPageComponent);
