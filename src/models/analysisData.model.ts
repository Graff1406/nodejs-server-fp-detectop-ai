import { SchemaType } from '@google/generative-ai';

export const analysisSchema = {
  required: ['translations', 'total_score', 'details', 'is_news_article'],
  type: SchemaType.OBJECT,
  properties: {
    is_news_article: {
      type: SchemaType.BOOLEAN,
      description:
        'Determine if the following article is a news article or not. Return `true` if it is a news article, and `false` if it is not.',
    },
    translations: {
      type: SchemaType.OBJECT,
      description:
        'Each property name must be returned in the language of the article and must begin with a capital letter',
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
        'quote_assessment',
        'purpose_disinformation',
        'summary',
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
        quote_assessment: {
          type: SchemaType.STRING,
        },
        purpose_disinformation: {
          type: SchemaType.STRING,
        },
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
      required: ['manipulation', 'fake', 'propaganda', 'article_summary'],
      description:
        'The rules are important, the string values in each field must be in the language in which the text for analysis is written, the confidence property of each item must be a number between 1 and 100, absolutely all data returned as a response that is a string must begin with a capital letter, and the tone and type properties may contain multiple values separated by commas, all possible options need to be identified',
      properties: {
        article_summary: {
          type: SchemaType.STRING,
        },
        manipulation: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.OBJECT,
            required: [
              'quote',
              'quote_assessment',
              'confidence',
              'method',
              'tone',
              'purpose_disinformation',
            ],
            properties: {
              quote: { type: SchemaType.STRING },
              confidence: { type: SchemaType.NUMBER },
              method: { type: SchemaType.STRING },
              tone: { type: SchemaType.STRING },
              quote_assessment: {
                type: SchemaType.STRING,
              },
              purpose_disinformation: {
                type: SchemaType.STRING,
              },
            },
          },
        },
        fake: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.OBJECT,
            required: [
              'quote',
              'quote_assessment',
              'confidence',
              'fake_type',
              'tone',
              'purpose_disinformation',
            ],
            properties: {
              quote: { type: SchemaType.STRING },
              confidence: { type: SchemaType.NUMBER },
              fake_type: { type: SchemaType.STRING },
              tone: { type: SchemaType.STRING },
              quote_assessment: {
                type: SchemaType.STRING,
              },
              purpose_disinformation: {
                type: SchemaType.STRING,
              },
            },
          },
        },
        propaganda: {
          type: SchemaType.ARRAY,
          items: {
            type: SchemaType.OBJECT,
            required: [
              'quote',
              'quote_assessment',
              'confidence',
              'type',
              'tone',
              'purpose_disinformation',
            ],
            properties: {
              quote: { type: SchemaType.STRING },
              confidence: { type: SchemaType.NUMBER },
              type: { type: SchemaType.STRING },
              tone: { type: SchemaType.STRING },
              quote_assessment: {
                type: SchemaType.STRING,
              },
              purpose_disinformation: {
                type: SchemaType.STRING,
              },
            },
          },
        },
      },
    },
  },
};

export type AnalysisData = typeof analysisSchema;
