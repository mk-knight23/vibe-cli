/**
 * Defensive command check flow removed with Genkit.
 * Stub retained only to prevent import errors.
 */
export type DefensiveCommandCheckInput = { command: string };
export type DefensiveCommandCheckOutput = { isHarmful: boolean; reason: string };

export async function defensiveCommandCheck(
  _input: DefensiveCommandCheckInput
): Promise<DefensiveCommandCheckOutput> {
  throw new Error('defensiveCommandCheck flow removed (Genkit disabled)');
}
