//import ...

export const Plugin = (globalConfig: SomeConfig): PluginInterface => {
    const metadata = {
        kind: 'execute',
    };


    /**
     * Calculate the sum of each .
     */
    const execute = async (inputs: PluginParams[]): Promise<PluginParams[]> => {
    };


    return {
        metadata,
        execute,
    };
};
