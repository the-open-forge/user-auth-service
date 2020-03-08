#!/bin/bash

docker-compose -f ../docker-compose.yml down --rmi local
#docker-compose -f ../docker-compose.yml down --remove-orphans