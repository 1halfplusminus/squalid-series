import type { AstroGlobal, MDXInstance } from 'astro';


export function getUniqueTags(posts: MDXInstance<Record<string, any>>[]) {
    return [...new Set(posts?.map((post) => post.frontmatter.tags).flat())];
}
