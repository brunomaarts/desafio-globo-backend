module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@app': './src/app',
        '@entities': './src/app/entities',
        '@repositories': './src/app/repositories',
        '@useCases': './src/app/useCases'
      },
    }],
    [
      require('@babel/plugin-proposal-decorators').default,
      {
         legacy: true
      }
   ],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
