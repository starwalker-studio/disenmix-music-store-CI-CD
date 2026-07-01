#!/bin/sh

echo "░█▀▀░▀█▀░█▀█░█▀█░░░█▀▀░█▀█░█▀█░▀█▀░█▀█░▀█▀░█▀█░█▀▀░█▀▄";
echo "░▀▀█░░█░░█░█░█▀▀░░░█░░░█░█░█░█░░█░░█▀█░░█░░█░█░█▀▀░█▀▄";
echo "░▀▀▀░░▀░░▀▀▀░▀░░░░░▀▀▀░▀▀▀░▀░▀░░▀░░▀░▀░▀▀▀░▀░▀░▀▀▀░▀░▀";

sudo docker compose -f docker-compose.dev.yml down 2>/dev/null
sudo docker compose -f docker-compose.yml down 2>/dev/null
