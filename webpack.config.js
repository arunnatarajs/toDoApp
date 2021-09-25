module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        
        {
            test: /\.html$/,
            loader: "html-loader",
          },
      ],
    },
  };