import {
  AnimationController,
  gsap,
  ScrollTrigger,
} from "@/animations/AnimationController";

type RevealOpts = {
  id: string;
  trigger: Element | string;
  targets: gsap.TweenTarget;
  start?: string;
  stagger?: number;
  y?: number;
  scrub?: boolean | number;
};

export function createReveal({
  id,
  trigger,
  targets,
  start = "top 80%",
  stagger = 0.08,
  y = 48,
  scrub = false,
}: RevealOpts) {
  if (AnimationController.prefersReducedMotion) {
    gsap.set(targets, { opacity: 1, y: 0, clearProps: "all" });
    return;
  }

  const tween = gsap.fromTo(
    targets,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration: scrub ? undefined : 0.9,
      ease: "power3.out",
      stagger,
      scrollTrigger: {
        trigger,
        start,
        scrub: scrub || false,
        toggleActions: scrub ? undefined : "play none none none",
      },
    },
  );

  const st = tween.scrollTrigger;
  AnimationController.register(id, {
    tweens: [tween],
    triggers: st ? [st] : [],
  });
}

type PinOpts = {
  id: string;
  trigger: Element | string;
  end?: string;
  pinSpacing?: boolean;
  onUpdate?: (self: ScrollTrigger) => void;
  animation?: gsap.core.Timeline;
};

export function createPinTimeline({
  id,
  trigger,
  end = "+=120%",
  pinSpacing = true,
  onUpdate,
  animation,
}: PinOpts) {
  if (AnimationController.prefersReducedMotion) return;

  const tl =
    animation ??
    gsap.timeline({
      scrollTrigger: {
        trigger,
        start: "top top",
        end,
        pin: true,
        scrub: 1,
        pinSpacing,
        anticipatePin: 1,
        onUpdate,
      },
    });

  const st = tl.scrollTrigger;
  AnimationController.register(id, {
    timelines: [tl],
    triggers: st ? [st] : [],
  });

  return tl;
}

type ParallaxOpts = {
  id: string;
  trigger: Element | string;
  target: gsap.TweenTarget;
  yPercent?: number;
  start?: string;
  end?: string;
};

export function createParallax({
  id,
  trigger,
  target,
  yPercent = 20,
  start = "top bottom",
  end = "bottom top",
}: ParallaxOpts) {
  if (AnimationController.prefersReducedMotion) return;

  const tween = gsap.fromTo(
    target,
    { yPercent: -yPercent / 2 },
    {
      yPercent: yPercent / 2,
      ease: "none",
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub: true,
      },
    },
  );

  const st = tween.scrollTrigger;
  AnimationController.register(id, {
    tweens: [tween],
    triggers: st ? [st] : [],
  });
}

type MaskOpts = {
  id: string;
  trigger: Element | string;
  targets: gsap.TweenTarget;
};

export function createTextMask({ id, trigger, targets }: MaskOpts) {
  if (AnimationController.prefersReducedMotion) {
    gsap.set(targets, { clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1 });
    return;
  }

  const tween = gsap.fromTo(
    targets,
    { clipPath: "inset(100% 0% 0% 0%)", y: 40, opacity: 0.4 },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    },
  );

  const st = tween.scrollTrigger;
  AnimationController.register(id, {
    tweens: [tween],
    triggers: st ? [st] : [],
  });
}

type ScaleOpts = {
  id: string;
  trigger: Element | string;
  target: gsap.TweenTarget;
  from?: number;
  to?: number;
};

export function createImageScale({
  id,
  trigger,
  target,
  from = 1.15,
  to = 1,
}: ScaleOpts) {
  if (AnimationController.prefersReducedMotion) {
    gsap.set(target, { scale: 1 });
    return;
  }

  const tween = gsap.fromTo(
    target,
    { scale: from },
    {
      scale: to,
      ease: "none",
      scrollTrigger: {
        trigger,
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
    },
  );

  const st = tween.scrollTrigger;
  AnimationController.register(id, {
    tweens: [tween],
    triggers: st ? [st] : [],
  });
}

export { createVideoScrub } from "@/animations/createVideoScrub";
