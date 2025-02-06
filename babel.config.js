module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@": "./src",
          "@components": "./src/components",
          "@navigation": "./src/navigation",
          "@assets": "./src/assets",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
          "@constants": "./src/constants",
        },
      },
    ],
  ]
};
