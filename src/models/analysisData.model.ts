import { SchemaType } from '@google/generative-ai';

export const analysisSchema = {
  required: ['translations', 'details', 'is_news_article'],
  type: SchemaType.OBJECT,
  properties: {
    is_news_article: {
      type: SchemaType.BOOLEAN,
      description:
        'Determine if the following article is a legitimate news article from a reputable news source. Analyze the structure, language, and references to verify its credibility. Return true only if it is a genuine news article, and false otherwise.',
    },
    translations: {
      type: SchemaType.OBJECT,
      description:
        'Each property name must be returned in the language of the article and must begin with a capital letter',
      required: [
        'disinformation',
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
        'intended_beneficiary',
        'influence_audience',
        'source_credibility_assessment',
        'narrative',
        'hidden_motive',
        'emotional_impact_level',
      ],
      properties: {
        disinformation: {
          type: SchemaType.STRING,
        },
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
        summary: {
          type: SchemaType.STRING,
        },
        intended_beneficiary: {
          type: SchemaType.STRING,
        },
        influence_audience: {
          type: SchemaType.STRING,
        },
        source_credibility_assessment: {
          type: SchemaType.STRING,
        },
        narrative: {
          type: SchemaType.STRING,
        },
        hidden_motive: {
          type: SchemaType.STRING,
        },
        emotional_impact_level: {
          type: SchemaType.STRING,
        },
      },
    },
    details: {
      type: SchemaType.OBJECT,
      required: [
        'disinformation',
        'manipulation',
        'fake',
        'propaganda',
        'brief_summary_article',
        'source_credibility_assessment',
      ],
      description:
        'The rules are important, the string values in each field must be in the language in which the text for analysis is written, the confidence property of each item must be a number between 1 and 100, absolutely all data returned as a response that is a string must begin with a capital letter, and the tone and type properties may contain multiple values separated by commas, all possible options need to be identified',
      properties: {
        brief_summary_article: {
          type: SchemaType.STRING,
          description:
            'Provide a concise summary of the article. Focus on the most essential points, capturing the core message or significance in a few sentences or even one sentence. Ensure that the summary reflects the main idea clearly and succinctly.',
        },
        source_credibility_assessment: {
          type: SchemaType.NUMBER,
          description:
            'Analyze the credibility of the given news source. must be a number between 1 and 100. Consider all mentions of bias, corruption, bribery, or publishing unverified information.',
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
              'intended_beneficiary',
              'influence_audience',
              'narrative',
              'hidden_motive',
              'emotional_impact_level',
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
              intended_beneficiary: {
                type: SchemaType.STRING,
              },
              influence_audience: {
                type: SchemaType.STRING,
              },
              narrative: {
                type: SchemaType.STRING,
              },
              hidden_motive: {
                type: SchemaType.STRING,
              },
              emotional_impact_level: {
                type: SchemaType.STRING,
              },
            },
          },
        },
        disinformation: {
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
              'intended_beneficiary',
              'influence_audience',
              'narrative',
              'hidden_motive',
              'emotional_impact_level',
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
              intended_beneficiary: {
                type: SchemaType.STRING,
              },
              influence_audience: {
                type: SchemaType.STRING,
              },
              narrative: {
                type: SchemaType.STRING,
              },
              hidden_motive: {
                type: SchemaType.STRING,
              },
              emotional_impact_level: {
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
              'intended_beneficiary',
              'influence_audience',
              'narrative',
              'hidden_motive',
              'emotional_impact_level',
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
              intended_beneficiary: {
                type: SchemaType.STRING,
              },
              influence_audience: {
                type: SchemaType.STRING,
              },
              narrative: {
                type: SchemaType.STRING,
              },
              hidden_motive: {
                type: SchemaType.STRING,
              },
              emotional_impact_level: {
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
              'intended_beneficiary',
              'influence_audience',
              'narrative',
              'hidden_motive',
              'emotional_impact_level',
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
              intended_beneficiary: {
                type: SchemaType.STRING,
              },
              influence_audience: {
                type: SchemaType.STRING,
              },
              narrative: {
                type: SchemaType.STRING,
              },
              hidden_motive: {
                type: SchemaType.STRING,
              },
              emotional_impact_level: {
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
