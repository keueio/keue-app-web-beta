import autoAnimate from "@formkit/auto-animate";

export const vAutoAnimate = {
    mounted: (el: any) => autoAnimate(el),
};
export const vAutoFocus = {
    mounted: (el: any) => el.focus(),
};
