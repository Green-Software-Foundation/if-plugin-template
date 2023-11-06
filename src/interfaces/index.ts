/**
 * Base interface for models.
 */
export interface IImpactModelInterface {
  configure(params: object | undefined): Promise<IImpactModelInterface>;

  authenticate(authParams: object): void;

  execute(observations: object | object[] | undefined): Promise<any[]>;
}
