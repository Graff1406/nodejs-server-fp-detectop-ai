import { Router } from 'express';
import { extractText } from '../services/extractText.service';
import { generateText } from '../services/generateText.services';

const router = Router();

router.get('/analyze', async (req, res): Promise<void> => {
  const { url, lang } = req.query as { url?: string; lang?: string };

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
      const result = await generateText(prompt);
      console.log('🚀 ~ router.get ~ result:', result);
      res.json({
        message: 'Data received',
        analyzedUrl: url,
        detectedLanguage: lang,
        result,
      });
    }
  }
}); // api/analyze

export { router };
