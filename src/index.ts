import {ModelPluginInterface} from './interfaces';

import {ModelParams} from './types/model-plugin';

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
  public async execute(inputs: ModelParams[]): Promise<ModelParams[]> {
    return Promise.resolve(inputs); // Replace with preffered logic.
  }
}
