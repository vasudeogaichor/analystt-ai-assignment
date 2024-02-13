import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";

import { VNode } from "snabbdom";

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

function render(vnode: VNode, container: HTMLElement) {
  patch(container, vnode);
}

function updateState(
  state: any,
  newState: any,
  renderFn: (newState: any) => VNode,
  container: HTMLElement
) {
  Object.assign(state, newState);
  const newVNode = renderFn(newState);
  render(newVNode, container);
}

export { h, render, updateState };
