import { SvelteComponentTyped } from "svelte";
interface SaosProps {
    animation? : string,
    animation_out? : string,
    css_observer? : string,
    css_animation? : string,
    once? : boolean,
    repeats? : number,
    top? : number,
    bottom? : number,
}
export default class Saos extends SvelteComponentTyped<SaosProps> {}
    
