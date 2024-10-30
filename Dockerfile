# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install FFmpeg
RUN apt-get update && apt-get install -y ffmpeg

# Expose the port the app runs on
EXPOSE 3000

# Define environment variable for production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]