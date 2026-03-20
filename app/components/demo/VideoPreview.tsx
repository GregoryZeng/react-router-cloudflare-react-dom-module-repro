import {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import type { MediaPlayerInstance } from "@vidstack/react";
import {
  DefaultVideoLayout,
  MediaPlayer,
  MediaProvider,
  defaultLayoutIcons,
} from "~/lib/vidstack-react";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import type { DemoJob } from "./transcript-types";

export type VideoPreviewHandle = {
  seekTo: (seconds: number, options?: { shouldPlay?: boolean }) => void;
};

export const VideoPreview = forwardRef<
  VideoPreviewHandle,
  {
    job: DemoJob;
    onProgress?: (seconds: number) => void;
    onPlaybackStateChange?: (state: "playing" | "paused") => void;
  }
>(({ job, onProgress }, ref) => {
  const playerRef = useRef<MediaPlayerInstance | null>(null);

  useImperativeHandle(
    ref,
    () => ({
      seekTo(seconds: number) {
        if (!playerRef.current) return;
        playerRef.current.currentTime = Math.max(0, seconds);
        onProgress?.(Math.max(0, seconds));
      },
    }),
    [onProgress],
  );

  return (
    <div className="rounded-3xl border border-border/60 bg-card p-3">
      <MediaPlayer
        ref={playerRef}
        className="aspect-video w-full overflow-hidden rounded-2xl"
        src={job.fileUrl}
        playsInline
      >
        <MediaProvider className="h-full w-full" />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
});
