/** @jsx vNode */
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

export default function Carousel(nodes, dataTarget = "", labels = []) {
  return (
    <>
      <div id={dataTarget} class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          {labels.map((label, index) => (
            <CarouselIndicator label={label} dataTarget={dataTarget} />
          ))}
        </div>

        <div class="carousel-inner">
          {nodes.map((n, index) => (
            <CarouselItem n={node} index={index} />
          ))}
        </div>

        {
          (controls =
            dataTarget !== "" ? (
              <CarouselControls dataTarget={dataTarget} />
            ) : (
              ""
            ))
        }
      </div>
    </>
  );
}

function CarouselItem({ n, index }) {
  const nodeClass = "carousel-item" + index === 0 ? " active" : "";
  return <div class={nodeClass}>{n}</div>;
}

function CarouselIndicator({ label, dataTarget }) {
  // Map each label to a carousel indicator with the first item being active and join all jsx
  const nodeClass = index === 0 ? "active" : "";
  const ariaCurrent = index === 0 ? "true" : "false";
  return (
    <button
      type="button"
      data-bs-target={dataTarget}
      data-bs-slide-to={index}
      class={nodeClass}
      aria-current={ariaCurrent}
      aria-label={label}
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
