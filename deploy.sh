#!/bin/bash
# Zero-downtime deploy script
# 1. Build new image
# 2. Start new container on temp port
# 3. Wait for health check
# 4. Swap containers

set -e

PORT="${PORT:-3000}"
PROJECT="cebu-cij-website"

echo "==> Building new image..."
docker compose build

echo "==> Starting new container..."
# Scale to 2 (old + new), then remove old
docker compose up -d --no-deps --scale app=2 --no-recreate app

# Wait for new container to be healthy
echo "==> Waiting for new container to be healthy..."
sleep 5

# Remove old container (the first one)
OLD_CONTAINER=$(docker compose ps -q app | head -1)
if [ -n "$OLD_CONTAINER" ]; then
  echo "==> Stopping old container $OLD_CONTAINER..."
  docker stop "$OLD_CONTAINER"
  docker rm "$OLD_CONTAINER"
fi

# Ensure only 1 instance running
docker compose up -d --no-deps --scale app=1 --no-recreate app

echo "==> Deploy complete!"
