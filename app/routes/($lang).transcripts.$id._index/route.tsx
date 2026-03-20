import { VideoPreview } from "~/components/demo/VideoPreview";
import type { DemoJob } from "~/components/demo/transcript-types";

const demoJob: DemoJob = {
  id: "probe-transcript",
  sourceType: "upload",
  fileName: "demo-video.mp4",
  fileUrl: "https://media-files.vidstack.io/360p.mp4",
  createdAt: new Date().toISOString(),
};

export default function TranscriptRoute() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-8">
      <h2 className="text-2xl font-semibold">Transcript Demo</h2>
      <p className="text-sm text-muted-foreground">
        Minimal route that statically imports a Vidstack player.
      </p>
      <VideoPreview job={demoJob} />
    </main>
  );
}
