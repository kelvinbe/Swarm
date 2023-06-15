#!/bin/bash

# Get the list of running container IDs from image 'peerbox'
container_ids=$(sudo docker ps -a -q -f ancestor=peerbox)

# Check if there are any containers from 'peerbox'
if [ -n "$container_ids" ]; then
    echo "Stopping and removing containers from image 'peerbox'..."
    sudo docker stop $container_ids
    sudo docker rm $container_ids
else
    echo "No containers from image 'peerbox' found."
fi

# Get the image ID of 'peerbox'
image_id=$(sudo docker images -q peerbox)

# Check if the image 'peerbox' exists
if [ -n "$image_id" ]; then
    echo "Removing image 'peerbox'..."
    sudo docker rmi $image_id
else
    echo "Image 'peerbox' not found."
fi