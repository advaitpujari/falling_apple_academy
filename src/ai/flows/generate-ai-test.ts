'use server';

/**
 * @fileOverview This file defines a Genkit flow for analyzing student answers and identifying weak spots.
 *
 * - generateAITest - A function that takes student answers as input and returns an analysis of their weak spots.
 * - GenerateAITestInput - The input type for the generateAITest function.
 * - GenerateAITestOutput - The return type for the generateAITest function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAITestInputSchema = z.object({
  studentAnswers: z
    .string()
    .describe('The student answers to the test questions.'),
  testQuestions: z.string().describe('The test questions.'),
});
export type GenerateAITestInput = z.infer<typeof GenerateAITestInputSchema>;

const GenerateAITestOutputSchema = z.object({
  weakSpots: z
    .string()
    .describe(
      'A detailed analysis of the student weak spots based on their answers.'
    ),
});
export type GenerateAITestOutput = z.infer<typeof GenerateAITestOutputSchema>;

export async function generateAITest(input: GenerateAITestInput): Promise<GenerateAITestOutput> {
  return generateAITestFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAITestPrompt',
  input: {schema: GenerateAITestInputSchema},
  output: {schema: GenerateAITestOutputSchema},
  prompt: `You are an AI-powered educational tool designed to identify student weak spots based on their test answers.

  Analyze the student answers in relation to the test questions and provide a detailed analysis of the areas where the student needs the most improvement.

  Test Questions: {{{testQuestions}}}
  Student Answers: {{{studentAnswers}}}
  Weak Spots Analysis:`,
});

const generateAITestFlow = ai.defineFlow(
  {
    name: 'generateAITestFlow',
    inputSchema: GenerateAITestInputSchema,
    outputSchema: GenerateAITestOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
