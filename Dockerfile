FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy static files
COPY index.html    /usr/share/nginx/html/
COPY styles.css    /usr/share/nginx/html/
COPY games.js      /usr/share/nginx/html/
COPY app.js        /usr/share/nginx/html/
COPY thumbnails/   /usr/share/nginx/html/thumbnails/

# Override default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
