export type BillingInterval = "month" | "year";

const visibilityTransition = "transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none";

export const swapClass = (visible: boolean): string =>
  `${visibilityTransition} ${visible ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-1.5"}`;

export const fadeClass = (visible: boolean): string =>
  `${visibilityTransition} ${visible ? "visible opacity-100" : "invisible opacity-0"}`;

export const stackCellClass = "col-start-1 row-start-1";
