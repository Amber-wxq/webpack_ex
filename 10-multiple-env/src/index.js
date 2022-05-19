import helloworld from "./helloworld";
import imgsrc from './assets/img-1.png'
import imgsvg from './assets/webpack-logo.svg'
import txtcontent from './assets/example.txt'
import jpgsrc from './assets/qianfeng-sem.jpg'

import './style.css'
import './style.less'
import Data from './assets/data.xml';
import Notes from './assets/data.csv';
import toml from './assets/data.toml';
import yaml from './assets/data.yaml';
import json5 from './assets/data.json5';
import _ from 'lodash'
import './async-module'

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
block.classList.add('block-bg')
document.body.appendChild(block);

const img3 = document.createElement('img');
img3.src = jpgsrc;
img3.style.cssText = 'width:600px;height:200px';
document.body.appendChild(img3);

document.body.classList.add('hello')

const span = document.createElement('span');
span.classList.add('icon');
span.innerHTML = '&#xe668';
document.body.appendChild(span);

console.log(Data);
console.log(Notes);

console.log(toml.title);
console.log(toml.owner.name);


console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json5.title);
console.log(json5.owner.name);
console.log(_.join(['index', 'module', 'loaded!'], ' '));


const button = document.createElement('button');
button.textContent = '点击执行加法运算';
button.addEventListener('click', () => {
    import(/*webpackChunkName:'math'*/'./math.js').then(({ add }) => {
        console.log(add(4, 5))
    })
})
document.body.appendChild(button)