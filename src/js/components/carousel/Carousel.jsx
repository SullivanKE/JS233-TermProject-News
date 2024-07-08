/** @jsx vNode */
import { vNode } from "@ocdla/view/view";

import Item from "./Item.jsx";
import Indicator from "./Indicator.jsx";
import Controls from "./Controls.jsx";

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
          <Indicator dataTarget={dataTarget} index={index} />
        ))}
      </div>

      <div class="carousel-inner" id={innerId}>
        {nodes.map((node, index) => (
          <Item n={node} index={index} />
        ))}
      </div>

      {dataTarget !== "" ? <Controls dataTarget={dataTarget} /> : ""}
    </div>
  );
}
