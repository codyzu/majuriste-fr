import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind3(),
    presetTypography(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: [
          {
            name: 'Inter',
            weights: ['400', '600', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
