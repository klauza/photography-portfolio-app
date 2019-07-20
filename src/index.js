import {imageComparisonFunction} from "./js/jquery-image-comparison";
import {mainPageLoader} from "./js/javaScript-photography";
import "./style.scss";

function loadImageAsync(url){
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', event => resolve(img));
    img.addEventListener('erorr', reason => reject(new Error('error')));

    img.src = url;
  })
}

const bgCss = 
 `background-image: linear-gradient(
  to bottom, 
  rgba(255, 255, 255, 0) 0%, 
  rgba(0, 0, 0, 0.15) 20%, 
  rgba(0, 0, 0, 0.15) 80%, 
  rgb(0, 0, 0) 100%),
  url("https://user-images.githubusercontent.com/43997053/61578840-c37cf800-aaf4-11e9-8086-db510c7cf388.jpg");`;



 window.addEventListener('DOMContentLoaded', () => {
  loadImageAsync("https://user-images.githubusercontent.com/43997053/61578840-c37cf800-aaf4-11e9-8086-db510c7cf388.jpg")
  .then(img => document.querySelector('#section-1 > .section-content').style.cssText = bgCss)
  .then(
    mainPageLoader(), 
    imageComparisonFunction(),
    document.querySelector('.loader').classList.add('hidden')
    )
  .catch(reason => console.log(reason));
  
  
});