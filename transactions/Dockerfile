# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --production

# Copy source files
COPY . .

# Expose port
EXPOSE 3001

# Command to start the app
CMD ["node", "src/index.js"]
