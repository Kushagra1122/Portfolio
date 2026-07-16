import { AnimationController, gsap } from "@/animations/AnimationController";
import type { ScrollTrigger } from "gsap/ScrollTrigger";

type VideoScrubOpts = {
  id: string;
  trigger: Element | string;
  video: HTMLVideoElement;
  end?: string;
  pin?: boolean;
  onReady?: () => void;
  onUpdate?: (progress: number) => void;
};

/**
 * Scrubs video.currentTime from the ScrollTrigger progress.
 * Uses a short pin distance on narrow viewports via matchMedia.
 */
export function createVideoScrub({
  id,
  trigger,
  video,
  end = "+=200%",
  pin = true,
  onReady,
  onUpdate,
}: VideoScrubOpts) {
  if (AnimationController.prefersReducedMotion) {
    video.pause();
    video.currentTime = 0;
    onReady?.();
    return;
  }

  const mm = gsap.matchMedia();
  const timelines: gsap.core.Timeline[] = [];
  const triggers: ScrollTrigger[] = [];

  const setup = (scrollEnd: string) => {
    const sync = (progress: number) => {
      if (!video.duration || Number.isNaN(video.duration)) return;
      const t = Math.min(
        Math.max(progress * video.duration, 0),
        video.duration - 0.05,
      );
      if (Math.abs(video.currentTime - t) > 0.03) {
        video.currentTime = t;
      }
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: "top top",
        end: scrollEnd,
        scrub: 0.4,
        pin,
        anticipatePin: 1,
        onUpdate: (self) => {
          sync(self.progress);
          onUpdate?.(self.progress);
        },
      },
    });

    timelines.push(tl);
    if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
  };

  mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      const { isMobile } = context.conditions as {
        isDesktop: boolean;
        isMobile: boolean;
      };
      setup(isMobile ? "+=110%" : end);
    },
  );

  const ready = () => {
    onReady?.();
    AnimationController.refresh();
  };

  if (video.readyState >= 1) ready();
  else video.addEventListener("loadedmetadata", ready, { once: true });

  AnimationController.register(id, { timelines, triggers });

  return () => {
    mm.revert();
    AnimationController.kill(id);
  };
}
