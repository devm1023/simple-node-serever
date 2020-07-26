# Simple Node Server

This is a simple node server to call a my serverless lambda function to upload a jpeg file to S3.

## Deploy

1. Install the dependencies:

```
npm install
```
2. Add environment variables:

```
cp .env.example .env
```

```
API_GATEWAY_URL=your-serverless-apigatway-url
BUCKET_NAME=existing-bucket-name
```
3. Run Server

```
npm run dev
```
