module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: {
        email: "info@simpsonbay-heritage.com",
        name: "Simpsonbay Heritage",
      },
      defaultReplyTo: "info@simpsonbay-heritage.com",
      testAddress: "info@simpsonbay-heritage.com",
    },
  },

  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: env("AWS_REGION"),
      params: {
        Bucket: env("AWS_BUCKET_NAME"),
        // StorageClass: env("AWS_S3_STORAGE_CLASSES"), // Configure your Amazon S3 Storage Classes (including this to environment variable is not a must)
      },
      // logger: console, // Only if you want to `stdout` logs
    },
  },

  comments: {
    enableUsers: true,
    badWords: false,
    moderatorRoles: ["Authenticated"],
  },
});
