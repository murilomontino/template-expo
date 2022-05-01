module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
      "module-resolver", 
      {
        alias: {
          '@/screens': "./source/screens",
          '@/components': "./source/components",
          '@/assets': "./source/assets",
          '@/theme': "./source/constants",
          '@/reducers': "./source/reducers",
          '@/services': "./source/services",
          '@/navigation': "./source/navigation",
        }
      }]
    ]
  };
};
