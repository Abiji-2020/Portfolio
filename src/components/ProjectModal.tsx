import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ExternalLink, Github, Calendar, Users, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectModalProps {
  project: {
    name: string;
    description: string;
    fullDescription: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    date?: string;
    team?: string;
    highlights?: string[];
    stats?: {
      stars?: string;
      users?: string;
    };
  } | null;
  open: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-[#e0e5ec] dark:bg-[#2d3748] border-none neuro-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground">
            {project.name}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        {/* Project Image */}
        <div className="relative h-64 -mx-6 -mt-4 mb-6 overflow-hidden rounded-t-2xl">
          <ImageWithFallback
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="space-y-6">
          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {project.date && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748]">
                <Calendar className="w-4 h-4" />
                <span>{project.date}</span>
              </div>
            )}
            {project.team && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748]">
                <Users className="w-4 h-4" />
                <span>{project.team}</span>
              </div>
            )}
          </div>

          {/* Stats */}
          {project.stats && (
            <div className="flex gap-4">
              {project.stats.stars && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl neuro-sm bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>{project.stats.stars} stars</span>
                </div>
              )}
              {project.stats.users && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl neuro-sm bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>{project.stats.users} users</span>
                </div>
              )}
            </div>
          )}

          {/* Full Description */}
          <div>
            <h4 className="mb-2 text-foreground">About this project</h4>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="mb-3 text-foreground">Key Highlights</h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748] mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h4 className="mb-3 text-foreground">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-xl neuro-inset bg-[#e0e5ec] dark:bg-[#2d3748] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4">
            {project.liveUrl && (
              <Button
                asChild
                className="flex-1 gap-2 neuro-sm hover:neuro-pressed transition-all duration-200 bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                asChild
                className="flex-1 gap-2 neuro-sm hover:neuro-pressed transition-all duration-200 bg-[#e0e5ec] dark:bg-[#2d3748] text-foreground"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
