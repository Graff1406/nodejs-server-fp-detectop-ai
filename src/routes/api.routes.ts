import { Router } from 'express';

const router = Router();

router.get('/analyze', (req, res) => {
  const { url, lang } = req.query;

  res.json({
    message: 'Data received',
    analyzedUrl: url,
    detectedLanguage: lang,
    /* Analysis data will be here */
  });
}); // api/analyze

export { router };
