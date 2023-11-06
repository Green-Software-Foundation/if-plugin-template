import {ModelPluginInterface} from './interfaces';

import {InputParams} from './types/model-plugin';

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
  public async execute(inputs: InputParams[]): Promise<any[]> {
    return Promise.resolve(inputs); // Replace with preffered logic.
  }
}
