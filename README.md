# Smart Contract Analyzer

A web application for analyzing smart contract code for vulnerabilities using AI.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Installation

### Prerequisites

- Node.js
- Python
- Flask

### Backend Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/smart-contract-analyzer.git
   cd smart-contract-analyzer/backend
   ```

2. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Start the Flask server:
   ```bash
   python app.py
   ```

### Frontend Installation

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install Node.js dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

## Usage

1. Open your web browser and navigate to http://localhost:3000.
2. Enter your smart contract code in the textarea.
3. Click on the "Analyze Contract" button to see the analysis results.

## Features

- AI-driven analysis of smart contract code for potential vulnerabilities.
- Real-time feedback on contract security.
- Easy-to-use interface for developers.

## Deployment

### Deploying Frontend to Netlify

1. Sign up or log in to [Netlify](https://www.netlify.com/).
2. Connect your GitHub repository to Netlify.
3. Set the build command to `npm run build` and the publish directory to `build`.
4. Trigger the deployment.

### Deploying Backend

- Deploy your Flask backend to a suitable hosting service or platform as per your requirements.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the aelf team for the blockchain platform.
- AI models used in this project are based on TensorFlow and Google Cloud AI Platform.
