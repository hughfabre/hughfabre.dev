import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = 'content/posts';

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  readingTime: number;
}

export interface Post extends PostMetadata {
  content: string;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function getAllPosts(): PostMetadata[] {
  const postsDirectory = path.join(process.cwd(), POSTS_DIR);
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md') && fileName !== 'index.md')
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf-8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        readingTime: calculateReadingTime(content),
      };
    })
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const postsDirectory = path.join(process.cwd(), POSTS_DIR);
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    readingTime: calculateReadingTime(content),
    content,
  };
}

