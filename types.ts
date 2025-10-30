import type { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  repoUrl: string;
  tags: string[];
}

export interface Skill {
  name: string;
  // Fix: Use `ReactNode` to correctly type JSX elements. This resolves the "Cannot find namespace 'JSX'" error.
  icon: ReactNode;
}
