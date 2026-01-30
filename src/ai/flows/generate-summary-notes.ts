'use server';

/**
 * @fileOverview An AI agent for summarizing notes, questions, or PDFs.
 *
 * - generateSummaryNotes - A function that handles the generation of summary notes.
 * - GenerateSummaryNotesInput - The input type for the generateSummaryNotes function.
 * - GenerateSummaryNotesOutput - The return type for the generateSummaryNotes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSummaryNotesInputSchema = z.object({
  text: z
    .string()
    .describe("The notes, questions, or PDF content to summarize."),
});
export type GenerateSummaryNotesInput = z.infer<typeof GenerateSummaryNotesInputSchema>;

const GenerateSummaryNotesOutputSchema = z.object({
  summary: z
    .string()
    .describe("The summarized content of the input text."),
  progress: z
    .string()
    .describe("A short, one-sentence summary of what has been generated."),
});
export type GenerateSummaryNotesOutput = z.infer<typeof GenerateSummaryNotesOutputSchema>;

export async function generateSummaryNotes(input: GenerateSummaryNotesInput): Promise<GenerateSummaryNotesOutput> {
  return generateSummaryNotesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSummaryNotesPrompt',
  input: {schema: GenerateSummaryNotesInputSchema},
  output: {schema: GenerateSummaryNotesOutputSchema},
  prompt: `You are an expert note taker and summarizer. Please summarize the following text:\n\n{{{text}}}\n\nMake the summary as concise as possible while retaining the core information.\n\nAlso, provide a short, one-sentence summary of what you have generated in the 'progress' field.
`,
});

const generateSummaryNotesFlow = ai.defineFlow(
  {
    name: 'generateSummaryNotesFlow',
    inputSchema: GenerateSummaryNotesInputSchema,
    outputSchema: GenerateSummaryNotesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
