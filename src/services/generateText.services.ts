import {
  genAI,
  ModelType,
  GenerateOptions,
} from '../providers/genAI.providers';
import { Result } from '../models';

export const generateText = async <T>({
  prompt = '',
  modelType = ModelType.Gemini_2_0_flash_lite_preview_02_05,
  generationConfig,
}: GenerateOptions): Promise<Result<T>> => {
  const model = genAI.getGenerativeModel({
    model: modelType,
    generationConfig,
  });

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    const parsedData =
      generationConfig?.responseMimeType === 'application/json'
        ? (JSON.parse(responseText) as T)
        : (responseText as T);

    return {
      data: parsedData,
      status: 200,
    };
  } catch (error) {
    console.error('Error in generateText:', error);

    return {
      data: error as T,
      status: 500,
    };
  }
};
