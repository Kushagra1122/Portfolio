"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Registered = {
  id: string;
  triggers: ScrollTrigger[];
  tweens: gsap.core.Tween[];
  timelines: gsap.core.Timeline[];
};

/**
 * Central registry for ScrollTrigger timelines.
 * Keeps section animations organized, killable, and reusable.
 */
class AnimationControllerImpl {
  private registry = new Map<string, Registered>();
  private reducedMotion = false;

  setReducedMotion(value: boolean) {
    this.reducedMotion = value;
    if (value) {
      this.killAll();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    }
  }

  get prefersReducedMotion() {
    return this.reducedMotion;
  }

  register(
    id: string,
    assets: {
      triggers?: ScrollTrigger[];
      tweens?: gsap.core.Tween[];
      timelines?: gsap.core.Timeline[];
    },
  ) {
    this.kill(id);
    this.registry.set(id, {
      id,
      triggers: assets.triggers ?? [],
      tweens: assets.tweens ?? [],
      timelines: assets.timelines ?? [],
    });
  }

  kill(id: string) {
    const entry = this.registry.get(id);
    if (!entry) return;
    entry.timelines.forEach((tl) => tl.kill());
    entry.tweens.forEach((tw) => tw.kill());
    entry.triggers.forEach((st) => st.kill());
    this.registry.delete(id);
  }

  killAll() {
    Array.from(this.registry.keys()).forEach((id) => this.kill(id));
  }

  refresh() {
    ScrollTrigger.refresh();
  }
}

export const AnimationController = new AnimationControllerImpl();

export { gsap, ScrollTrigger };
