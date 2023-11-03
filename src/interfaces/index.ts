/**
 * Base interface for models.
 */
export interface IImpactModelInterface {
  configure(
    name: string,
    staticParams: object | undefined
  ): Promise<IImpactModelInterface>;

  authenticate(authParams: object): void;

  execute(observations: object | object[] | undefined): Promise<any[]>;
}
