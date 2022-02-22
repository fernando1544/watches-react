import React from 'react';
import classes from './ProductData.module.css';
import ProductInfo from '../ProductInfo';

const ProductData = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.ProductImage]

    if (pos === props.currentPreviewImagePos) {
      classArr.push(classes.SelectedProductImage);
    }

    return (
      <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)} />
    )
  })

  const featureList = props.data.featureList.map((item, pos) => {
    const classArr = [classes.FeatureItem]

    if (pos===1 && props.showHeartbeatSection) {
      classArr.push(classes.SelectedFeatureItem);
    } else if(pos===0 && !props.showHeartbeatSection){
      classArr.push(classes.SelectedFeatureItem)
    }

    return (
      <button key={pos} className={classArr.join(' ')} onClick={() => props.onFeatureItemClick(pos)}>{item}</button>
    );
  })

  return (
    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}> {ProductInfo.title} </h1>

      <p className={classes.ProductDescription}> {ProductInfo.description} </p>

      <h3 className={classes.SectionHeading}>Select Color</h3>
      <div>
        {colorOptions}

        <h3 className={classes.SectionHeading}>Features</h3>
        <div>
          {featureList}
        </div>

        <button className={classes.PrimaryButton}>Buy now</button>
      </div>
    </div>
  )
}

export default ProductData;