/** @jsx vNode */
import { vNode } from "@ocdla/view/view";
export default function Image({ src, className }) {
  return <img src={src} className={className} />;
}
