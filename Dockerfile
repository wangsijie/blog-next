FROM node:lts
WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn
COPY . .
RUN --mount=type=secret,id=TEMP_OSS_AK \
  --mount=type=secret,id=TEMP_OSS_SK \
  --mount=type=secret,id=TEMP_OSS_BUCKET \
  --mount=type=secret,id=TEMP_OSS_ENDPOINT \
  --mount=type=secret,id=TEMP_OSS_PREFIX \
  yarn build
CMD npm start
