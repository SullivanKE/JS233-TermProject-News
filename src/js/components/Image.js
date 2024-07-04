/** @jsx vNode */
import { vNode } from '@ocdla/view/view';
export default function Image(props) {
    return <img src={props.src} className={props.className} />;
};

