FROM mhart/alpine-node:10.16
WORKDIR /srv
COPY package*.json ./
RUN npm install -g serverless \
    && npm install
COPY . .
EXPOSE 4000
ENTRYPOINT sls offline start
