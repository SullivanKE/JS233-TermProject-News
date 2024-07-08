/** @jsx vNode */
import { vNode } from "@ocdla/view/view";
export default function Video(props) {
  return <video src={props.src} className={props.className} controls />;
}
