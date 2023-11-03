import {IImpactModelInterface} from './interfaces';

export class YourModel implements IImpactModelInterface {
  name: string | undefined;
  sharedParams: object | undefined = undefined;

  protected authCredentials: object | undefined;

  /**
   * Authentication credentials if needed.
   */
  public async authenticate(authParams: object) {
    this.authCredentials = authParams;
  }

  public async configure(
    name: string,
    staticParams: object | undefined = undefined
  ): Promise<IImpactModelInterface> {
    this.name = name;
    this.sharedParams = staticParams;

    return this;
  }

  /**
   * Calculates `output` based on given model's `input`.
   */
  public async execute(inputs: any[]): Promise<any[]> {
    return Promise.resolve([]);
  }
}
