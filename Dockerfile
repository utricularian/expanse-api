FROM ruby:2.6.3

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

RUN mkdir /expanse-api

WORKDIR /expanse-api

COPY Gemfile /expanse-api/Gemfile

COPY Gemfile.lock /expanse-api/Gemfile.lock

RUN bundle install

COPY . /expanse-api
