/**
 * PR description generation flow removed with Genkit.
 * Stub present to avoid import errors.
 */
export type GeneratePRDescriptionInput = { commits: string[] };
export type GeneratePRDescriptionOutput = { description: string; progress: string };

export async function generatePRDescription(
  _input: GeneratePRDescriptionInput
): Promise<GeneratePRDescriptionOutput> {
  throw new Error('generatePRDescription flow removed (Genkit disabled)');
}
