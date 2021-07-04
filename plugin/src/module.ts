import { PanelPlugin } from '@grafana/data';
import { options, defaults } from './types';
import { GiphyPanel } from './GiphyPanel';

export const plugin = new PanelPlugin<options>(GiphyPanel).setDefaults(defaults)