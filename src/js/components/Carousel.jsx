/** @jsx vNode */
/** @jsxFrag "Fragment" */
import { vNode } from "@ocdla/view/view";

// Returns the html required to form the carousel for the main page given an array of html nodes and
// optionally the data-target, or the id of the carousel itself to be used in the carousel controls.
// Finally, you may pass in an array of string labels for the indicators. This should be the same size as the nodes.
// Without a dataTarget, the carousel will not use controls.
// Without indicatorLabels or a dataTarget, the carousel will not use indicators.
// This is formatted as

// nodes = [<img.../>, <img.../>, <img.../>]
// dataTarget = "#carouselExample"
// indicatorLabels = ["Image 1", "Image 2", "Image 3"]

export default function Carousel({ nodes, identifier = "" }) {
  let dataTarget = "#" + identifier;
  let innerId = identifier + "-inner";
  return (
    <div
      id={identifier}
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        {nodes.map((node, index) => (
          <CarouselIndicator dataTarget={dataTarget} index={index} />
        ))}
      </div>

      <div class="carousel-inner" id={innerId}>
        {nodes.map((node, index) => (
          <CarouselItem n={node} index={index} />
        ))}
      </div>

      {dataTarget !== "" ? <CarouselControls dataTarget={dataTarget} /> : ""}
    </div>
  );
}

function CarouselCaption({ caption }) {
  return <div class="carousel-caption d-none d-md-block">{caption}</div>;
}

function CarouselItem({ n, index }) {
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

function CarouselIndicator({ dataTarget, index }) {
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

function CarouselControls({ dataTarget }) {
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
