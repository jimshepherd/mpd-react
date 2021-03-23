# Update the local files
git fetch
git pull

# Update the build files
yarn run build

# Copy the build files to the appropriate directories
cp build/* /srv/mpd/frontend/
cp -r build/static/* /srv/mpd/static/
