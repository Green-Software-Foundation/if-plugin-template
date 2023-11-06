import {ModelPluginInterface} from './interfaces';

export class YourModel implements ModelPluginInterface {
  staticParams: object | undefined = undefined;

  /**
   * Configures instance with given params.
   */
  public async configure(
    staticParams: object | undefined = undefined
  ): Promise<ModelPluginInterface> {
    this.staticParams = staticParams;

    return this;
  }

  /**
   * Calculates `output` based on given model's `input`.
   */
  public async execute(inputs: any[]): Promise<any[]> {
    return Promise.resolve([]); // Replace with preffered logic.
  }
}
