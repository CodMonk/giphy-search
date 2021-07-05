# giphy-search

[![Build](https://github.com/grafana/grafana-starter-panel/workflows/CI/badge.svg)](https://github.com/grafana/grafana-starter-panel/actions?query=workflow%3A%22CI%22)

Grafana panel plugin for searching giphy images

### Search View

![image](https://user-images.githubusercontent.com/15674997/124464821-4666ee00-ddb2-11eb-9d52-ac16aae012d3.png)

### Image Limits:

![image](https://user-images.githubusercontent.com/15674997/124381932-8f4f7180-dce2-11eb-9b1a-e4abd3111db7.png)

## prerequisite
 - NodeJS16
 - yarn package maneger
 - reactjs 17 

## Getting started

1. Go to `giphy-search-panel` from root directory and install dependencies

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
4. Go to root directory and run docker images as :
   ### Linux:
   ```
    docker run -d \
   -p 3000:3000 \
   -v  "$(pwd)":/var/lib/grafana/plugins \
   --name=grafana \
   -e "GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=cod-giphy-search" \
    grafana/grafana
   ```
   ### Windows:
   ```
   docker run -d -p 3000:3000 -v  %cd%:/var/lib/grafana/plugins --name=grafana -e "GF_PLUGINS_ALLOW_LOADING_UNSIGNED_PLUGINS=cod-giphy-search" grafana/grafana
   ```

   
## Note:
   It's a unsigned grafana plugin. By default grafana doesn't allow unsigned plugin to exeute. if docker doesn't work then copy the `giphy-search-panel` into grafana's plugin directory and build the plugin there using `yarn build`. After build completes, set the grafana configuration variable as `allow_loading_unsigned_plugins ="cod-giphy-search"` and restart the grafana to load the plugin.

## Learn more
   
- [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- [Panel Editor options](https://grafana.com/docs/grafana/latest/packages_api/data/panelplugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System
