import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import 'bootstrap';
import News from './News';

let news;
window.onload = () => {
    news = new News();
}