import { Pane } from 'https://cdn.skypack.dev/tweakpane';

const config = {
  debug: false,
  blend: true
};

const video = document.querySelector('video');

const sync = () => {
  video.src = config.src;
  document.documentElement.dataset.debug = config.debug;
  document.documentElement.dataset.blend = config.blend;
};
const ctrl = new Pane({
  title: 'Config',
  expanded: true
});

ctrl.addBinding(config, 'src', { label: 'src' });
ctrl.addBinding(config, 'debug', { label: 'debug' });
ctrl.addBinding(config, 'blend', { label: 'mix-blend-mode' });
ctrl.on('change', sync);
sync();



