import { SchemaType } from '@google/generative-ai';

export const analysisSchema = {
  required: ['translations', 'total_score', 'details', 'is_news_article'],
  type: SchemaType.OBJECT,
  properties: {
    is_news_article: {
      type: SchemaType.BOOLEAN,
    },
    translations: {
      type: SchemaType.OBJECT,
      description:
        'Translate the keys of the current object into the language of the article',
      required: [
        'manipulation',
        'fake',
        'propaganda',
        'quote',
        'confidence',
        'type',
        'tone',
        'method',
        'fake_type',
      ],
      properties: {
        manipulation: {
          type: SchemaType.STRING,
        },
        fake: { type: SchemaType.STRING },
        propaganda: { type: SchemaType.STRING },
        quote: { type: SchemaType.STRING },
        confidence: { type: SchemaType.STRING },
        type: { type: SchemaType.STRING },
        tone: { type: SchemaType.STRING },
        method: { type: SchemaType.STRING },
        fake_type: { type: SchemaType.STRING },
      },
    },
    total_score: {
      type: SchemaType.OBJECT,
      required: ['propaganda', 'fake', 'manipulation'],
      description:
        'The total score of the article must be a number between 1 and 100',
      properties: {
        propaganda: { type: SchemaType.NUMBER },
        fake: { type: SchemaType.NUMBER },
        manipulation: { type: SchemaType.NUMBER },
      },
    },
    details: {
      type: SchemaType.OBJECT,
      required: ['manipulation', 'fake', 'propaganda'],
      description:
        'The confidence property of each item must be a number between 1 and 100',
      properties: {
        manipulation: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.OBJECT,
            required: ['quote', 'confidence', 'method', 'tone'],
            properties: {
              quote: { type: SchemaType.STRING },
              confidence: { type: SchemaType.NUMBER },
              method: { type: SchemaType.STRING },
              tone: { type: SchemaType.STRING },
            },
          },
        },
        fake: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.OBJECT,
            required: ['quote', 'confidence', 'fake_type', 'tone'],
            properties: {
              quote: { type: SchemaType.STRING },
              confidence: { type: SchemaType.NUMBER },
              fake_type: { type: SchemaType.STRING },
              tone: { type: SchemaType.STRING },
            },
          },
        },
        propaganda: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.OBJECT,
            required: ['quote', 'confidence', 'type', 'tone'],
            properties: {
              quote: { type: SchemaType.STRING },
              confidence: { type: SchemaType.NUMBER },
              type: { type: SchemaType.STRING },
              tone: { type: SchemaType.STRING },
            },
          },
        },
      },
    },
  },
};

export type AnalysisData = typeof analysisSchema;
