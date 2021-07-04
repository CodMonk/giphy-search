# giphy-search

[![Build](https://github.com/grafana/grafana-starter-panel/workflows/CI/badge.svg)](https://github.com/grafana/grafana-starter-panel/actions?query=workflow%3A%22CI%22)

Grafana panel plugin for searching giphy images

## Getting started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Build plugin in development mode or run in watch mode

   ```bash
   yarn dev
   ```

   or

   ```bash
   yarn watch
   ```

3. Build plugin in production mode

   ```bash
   yarn build
   ```
4. Run docker images
   ### Windows:
   ```
   docker run -d -p 3000:3000 -v  %cd%:/var/lib/grafana/plugins --name=grafana -e "GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=cod-giphy-search" grafana/grafana
   ```
   ### Linux:
   ```
    docker run -d \
   -p 3000:3000 \
   -v  "$(pwd)":/var/lib/grafana/plugins \
   --name=grafana \
   -e "GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=cod-giphy-search" \
    grafana/grafana

   ```
   
## Note:
   It's a unsigned grafana plugin. By default grafana doesn't allow unsigned plugin to exeute. if docker doesn't work then copy the `giphy-search-panel` into grafana's plugin directory and build the plugin there using `yarn build`. After build completes, set the grafana configuration variable as `allow_loading_unsigned_plugins ="cod-giphy-search"` and restart the grafana to load the plugin.
   
   This plugin was developed in windows machine, so it might throw linting errors for linux user.
## Learn more

- [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System
