import { SvelteComponentTyped } from "svelte";
export class Saos extends SvelteComponentTyped<{
    animation : string,
    animation_out : string,
    once: boolean,
    repeats: number,
    top: number,
    bottom: number,
    css_observer : string,
    css_animation : string
}> {};
