/** @jsx vNode */
/** @jsxFrag "Fragment" */
import { vNode } from "@ocdla/view/view";
export default function CarouselControls({ dataTarget }) {
  return (
    <>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target={dataTarget}
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target={dataTarget}
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </>
  );
}
