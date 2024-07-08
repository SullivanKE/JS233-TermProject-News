/** @jsx vNode */
import { vNode } from "@ocdla/view/view";
export default function CarouselItem({ n, index }) {
  const nodeClass = "carousel-item" + (index === 0 ? " active" : "");
  const uuid = n.uuid;
  const node = n.node;
  if (uuid)
    return (
      <div class={nodeClass} data-uuid={uuid}>
        {node}
      </div>
    );
  return <div class={nodeClass}>{node}</div>;
}
