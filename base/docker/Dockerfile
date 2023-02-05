ARG BUILDER_IMAGE_NAME
FROM $BUILDER_IMAGE_NAME as builder
ARG ENV
ENV ENV=$ENV

WORKDIR /app
COPY . .
RUN npm run build:release -- -f ".env.$ENV" react-scripts --max_old_space_size=16384 build --nomaps

FROM nginx:stable-alpine
RUN rm -r /etc/nginx/conf.d
COPY docker/nginx/conf /etc/nginx/conf.d
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
COPY ./.env .
