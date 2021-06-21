FROM nginx:stable-alpine
RUN rm -rf /etc/nginx/conf.d
COPY config/nginx.conf /etc/nginx/conf.d/nginx.conf
COPY ./build/ /usr/share/nginx/html


COPY ./*.sh /usr/share/nginx/html/
COPY ./.env.docker /usr/share/nginx/html/

WORKDIR /usr/share/nginx/html/

CMD ["/bin/sh", "/usr/share/nginx/html/startNginx.sh"]
