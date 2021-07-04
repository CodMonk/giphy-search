import { PanelPlugin } from '@grafana/data';
import { GiphyOptions } from './types';
import { GiphyPanel } from './GiphyPanel';

export const plugin = new PanelPlugin<GiphyOptions>(GiphyPanel)
.setPanelOptions(builder => {
    return builder.addNumberInput({
      path: 'limit',
      name: 'No of images',
      description: 'No of images to load from giphy',
      settings: {
        min: 10,
        max: 100,
      }
    });
});