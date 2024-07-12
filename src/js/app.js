/** @jsx vNode */
import { vNode, View } from "@ocdla/view";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import 'bootstrap';
import News from './News';

new Worker(new URL('../sw.js', import.meta.url));

let news;
window.onload = () => {
    news = new News();
}