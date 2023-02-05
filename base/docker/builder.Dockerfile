FROM node:14
WORKDIR /app

# Copy all local files into the image.
COPY ./package.json .
# COPY ./package-lock.json .

RUN npm install
#RUN npm update
#fix  vulnerabilities 
RUN npm audit fix
