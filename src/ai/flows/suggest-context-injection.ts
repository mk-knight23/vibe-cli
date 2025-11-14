/**
 * Context injection suggestion flow removed with Genkit.
 * Stub retained to avoid import errors.
 */
export type SuggestContextInjectionInput = {
  prompt: string;
  availableFiles: string[];
  commandHistory: string[];
};
export type SuggestContextInjectionOutput = {
  suggestedFiles: string[];
  suggestedCommands: string[];
};

export async function suggestContextInjection(
  _input: SuggestContextInjectionInput
): Promise<SuggestContextInjectionOutput> {
  throw new Error('suggestContextInjection flow removed (Genkit disabled)');
}
