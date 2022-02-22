import React, { Component } from 'react';
import classes from './App.module.css';
import ProductData from './ProductData/ProductData';
import ProductInfo from './ProductInfo';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/Topbar';

class App extends Component {
  state = {
    productInfo: ProductInfo,
    currentPreviewImagePos: 0,
    showHeartbeatSection: false,
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos})
  }

  onFeatureItemClick = (pos) => {
    let updatedState = false;
    if (pos === 1){
      updatedState = true;
    }
    this.setState({showHeartbeatSection: updatedState})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Topbar />
        </header>

        <div className={classes.MainContainer}>
          <ProductPreview currentPreviewImage={this.state.productInfo.colorOptions[this.state.currentPreviewImagePos].imageUrl} showHeartbeatSection={this.state.showHeartbeatSection} />

          <ProductData data={this.state.productInfo} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos}
          onFeatureItemClick={this.onFeatureItemClick} showHeartbeatSection={this.state.showHeartbeatSection} />
        </div>
      </div>
    );
  }
}

export default App;
