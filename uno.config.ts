import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import presetWind3 from '@unocss/preset-wind3';

export default defineConfig({
  presets: [presetWind3()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
