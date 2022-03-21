import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  constructor() {}

  @HostBinding("style.backgroundColor") color: string;

  @HostListener("window:keydown", ["$event"]) onKeyDown(e: KeyboardEvent) {
    this.color =
      e.which === 37
        ? (this.color = "purple")
        : e.which === 38
        ? (this.color = "pink")
        : e.which === 39
        ? (this.color = "green")
        : e.which === 40
        ? (this.color = "maroon")
        : "";
    // if (e.which === 37) this.color = "purple";
    // if (e.which === 38) this.color = "pink";
    // if (e.which === 39) this.color = "green";
    // if (e.which === 40) this.color = "maroon";
  }
}
