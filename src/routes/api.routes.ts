import { Router } from 'express';

import { extractText } from '../services/extractText.service';
import { analysisSchema } from '../models';
import { generateText } from '../services/generateText.services';

const router = Router();

router.get('/analyze', async (req, res): Promise<void> => {
  const { url } = req.query as { url?: string };

  if (url) {
    const article = await extractText(url);

    if (article.error) {
      res.status(500).json({
        message: 'Failed to analyze the URL',
        error: article.errorMessage,
      });
      return;
    } else if (article.noContent) {
      res.status(404).json({
        message: 'No content found in the URL',
      });
      return;
    } else {
      const prompt = article.content;
      const result = await generateText({
        prompt: `
          Language of article: ${prompt.substring(0, 100)}.
          Article${prompt}.
          Source: ${url}.
          the string values in each field must be in the language in which the text for analysis is written.
        `,
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: analysisSchema,
        },
      });
      res.json({
        message: 'Data received',
        analyzedUrl: url,
        result,
      });
    }
  }
}); // api/analyze

export { router };
