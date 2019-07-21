// import path from 'path';
// import { remote } from 'electron';
import { connect } from 'react-redux';
import JsonPageView from './JsonPageView';

// const { BrowserWindow } = remote;

const mapDispatchToProps = () => ({
  handleAddWatcher: () => {
    // const fileToRender = path.resolve(path.join(__dirname, '../renderer/index.html'));
    // const win = new BrowserWindow({
    //   width: 400,
    //   height: 200,
    //   show: false
    // });
    // win.on('close', () => win = null);
    // win.loadFile(fileToRender);
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(JsonPageView);
