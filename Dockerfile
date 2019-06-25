FROM ruby:2.6.3

RUN apt-get update -qq && \
    apt-get install -y \
    apt-transport-https \
    build-essential \
    libpq-dev \
    libssl-dev

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install -y nodejs

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get -qq update && apt-get -qqy install yarn

RUN mkdir /expanse-api

WORKDIR /expanse-api

COPY Gemfile /expanse-api/Gemfile

COPY Gemfile.lock /expanse-api/Gemfile.lock

COPY package.json /expanse-api/package.json

COPY yarn.lock /expanse-api/yarn.lock

RUN bundle install

RUN NODE_ENV=development yarn install --check-files

COPY . /expanse-api
