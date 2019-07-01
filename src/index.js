import {imageComparisonFunction} from "./js/jquery-image-comparison";
import {mainPageLoader} from "./js/javaScript-photography";
import "./style.scss";

window.addEventListener('load', function(){
  const loader = document.querySelector('.loader');
  mainPageLoader();
  imageComparisonFunction();
  loader.classList.add('hidden');
});