FROM node:8

EXPOSE 8020

RUN mkdir /node-app

WORKDIR /node-app

ADD package.json .
ADD package-lock.json .

RUN npm install --only=production

ADD tsconfig.json .
ADD src/ ./src

# Add Tini
ENV TINI_VERSION v0.16.1
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

CMD ["npm", "run", "start"]