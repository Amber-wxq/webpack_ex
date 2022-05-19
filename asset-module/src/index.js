import helloworld from "./helloworld";
import imgsrc from './assets/img-1.png'
import imgsvg from './assets/webpack-logo.svg'
import txtcontent from './assets/example.txt'
import jpgsrc from './assets/qianfeng-sem.jpg'

helloworld();
const img = document.createElement('img');
img.src = imgsrc;
document.body.appendChild(img);
const img2 = document.createElement('img');
img2.src = imgsvg;
img2.style.cssText = 'width:600px;height:200px';
document.body.appendChild(img2);

const block = document.createElement('div');
block.style.cssText = "width:200px;height:200px;background-color:aliceblue";
block.textContent = txtcontent;
document.body.appendChild(block);

const img3 = document.createElement('img');
img3.src = jpgsrc;
img3.style.cssText = 'width:600px;height:200px';
document.body.appendChild(img3);