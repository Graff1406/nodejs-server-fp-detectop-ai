import { Router } from 'express';
import { extractText } from '../services/extractText.service';

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
      console.log('🚀 ~ router.get ~ article:', article);
      res.json({
        message: 'Data received',
        analyzedUrl: url,
        detectedLanguage: lang,
        result: { article },
      });
    }
  }
}); // api/analyze

export { router };
