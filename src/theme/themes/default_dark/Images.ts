/**
 * Images should be stored in the `App/Images` directory and referenced using variables defined here.
 */

export default function () {
  const ImgPath = '../../assets/images/';
  return {
    logo: require('../../assets/images/tom_dark.jpg'),
    tick: require(`${ImgPath}tick.png`),
    notification: require(`${ImgPath}notification.png`),
  };
}
