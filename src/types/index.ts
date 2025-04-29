export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string;
  toolsUsed: string[];
}