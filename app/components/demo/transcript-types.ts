export type DemoJob = {
  id: string;
  sourceType: "upload" | "youtube";
  fileName?: string;
  fileUrl?: string;
  youtubeUrl?: string;
  createdAt: string;
};
