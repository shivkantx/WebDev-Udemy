function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  // Handle children safely
  domElement.textContent = reactElement.props.children;

  // Set all props except children
  for (const prop in reactElement.props) {
    if (prop === "children") continue; // Skip children
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Append once
  container.appendChild(domElement);
}

// React-like element
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
    children: "Click me to visit Google",
  },
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
