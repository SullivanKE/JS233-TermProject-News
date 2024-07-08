/** @jsx vNode */
import { vNode } from "@ocdla/view/view";
export default function CarouselIndicator({ dataTarget, index }) {
  const nodeClass = index === 0 ? "active" : "inactive";
  const ariaCurrent = index === 0 ? "true" : "false";
  return (
    <button
      type="button"
      data-bs-target={dataTarget}
      data-bs-slide-to={index}
      class={nodeClass}
      aria-current={ariaCurrent}
    ></button>
  );
}
