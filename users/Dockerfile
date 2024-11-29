# Step 1: Use Node.js image to build the application
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --production

# Copy the rest of the application files into the container
COPY . .

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "src/index.js"]
