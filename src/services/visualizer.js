import Api from '@terralego/core/modules/Api';
import { sortCustomLayers } from '@terralego/core/modules/Visualizer/services/layersTreeUtils';
import memoizee from 'memoizee';

export const fetchViewConfig = memoizee(async viewName => {
  try {
    const config = await Api.request(`geolayer/view/${viewName}/`);

    // Replace '/api/' part in urls with the API_HOST value to be able to reach the
    // configured backend
    const configWithHost = JSON.parse(JSON.stringify(config).replace(/"\/api(\/[^"]+)"/g, `"${Api.host}$1"`));

    const { layersTree, map: { customStyle: { layers } = {} } = {} } = configWithHost;

    configWithHost.map = configWithHost.map || {};
    configWithHost.map.customStyle = configWithHost.map.customStyle || {};
    configWithHost.map.customStyle.layers = sortCustomLayers(layers, layersTree);

    return configWithHost;
  } catch (e) {
    return null;
  }
}, { promise: true });

const getLogo = slug => logos[slug] || defaultIcon;

export const fetchAllViews = async () => {
  try {
    const config = await Api.request('geolayer/scene/');
    const allViews = JSON.parse(JSON.stringify(config.results).replace(/"\/api(\/[^"]+)"/g, `"${Api.host}$1"`));
    return allViews.map(({
      name,
      slug,
      custom_icon: customIcon,
    }) => ({
      id: `nav-${slug}`,
      label: name,
      href: `/{{VIEW_ROOT_PATH}}/${slug}`,
      // Todo: Remove logos[slug] when terra-admin is able to interact with this app
      iconPath: customIcon || getLogo(slug),
      icon: 'icon',
    }));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return [];
  }
};

export default { fetchViewConfig, fetchAllViews };
