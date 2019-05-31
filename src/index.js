import {imageComparisonFunction} from "./js/jquery-image-comparison";
import {mainPageLoader} from "./js/javaScript-photography";
import "./style.scss";

$(document).ready(function(){
  mainPageLoader();
  imageComparisonFunction();
});