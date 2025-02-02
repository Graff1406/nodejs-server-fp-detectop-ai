import { JSDOM } from 'jsdom';
import { Readability } from '@mozilla/readability';

// Interface defining the extracted article structure
interface Article {
  title: string;
  content: string;
  noContent?: boolean;
  error?: boolean;
  errorMessage?: string;
}

// Function to fetch the HTML content of a given URL
async function fetchHtml(url: string): Promise<string> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error(`Failed to fetch URL: ${url}`, error);
    throw new Error('Failed to fetch content');
  }
}

// Function to extract the main article text from a webpage
export async function extractText(url: string): Promise<Article> {
  try {
    const html = await fetchHtml(url);
    const dom = new JSDOM(html, { url });

    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    if (!article) {
      return { title: '', content: '', noContent: true };
    }

    return {
      title: article.title ?? '',
      content: article.textContent.trim() ?? '',
    };
  } catch (error) {
    console.error('Error extracting text:', error);
    return {
      title: '',
      content: '',
      error: true,
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
