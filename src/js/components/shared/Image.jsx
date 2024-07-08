/** @jsx vNode */
import { vNode } from "@ocdla/view/view";
export default function Image({ src, className, uuid }) {
  return <img src={src} className={className} data-uuid={uuid} />;
}
