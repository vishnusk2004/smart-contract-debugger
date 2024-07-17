# Smart Contract Analyzer

A web application for analyzing smart contract code for vulnerabilities using AI.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Example Smart Contract](#example-smart-contract)
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
   git clone https://github.com/vishnusk2004/smart-contract-debugger.git
   cd smart-contract-debugger/backend
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

## Example Smart Contract

You can use the following example Solidity smart contract to test the analyzer:

```solidity
// Example Solidity Smart Contract
pragma solidity ^0.8.0;

contract SimpleContract {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function transfer(address recipient, uint256 amount) public {
        require(msg.sender == owner, "Only owner can transfer funds");
        payable(recipient).transfer(amount);
    }

    function deposit() public payable {
        // Deposit ether to the contract
    }

    function withdraw(uint256 amount) public {
        require(msg.sender == owner, "Only owner can withdraw funds");
        payable(owner).transfer(amount);
    }
}
```

## Features

- AI-driven analysis of smart contract code for potential vulnerabilities.
- Real-time feedback on contract security.
- Easy-to-use interface for developers.

## Deployment

### Deploying Frontend to Vercel

1. Sign up or log in to [Vercel](https://vercel.com/).
2. Connect your GitHub repository to Vercel.
3. Set the build command to `npm run build` and the output directory to `frontend/build`.
4. Trigger the deployment.
5. Your frontend is now live at [https://smart-contract-debugger.vercel.app/](https://smart-contract-debugger.vercel.app/).

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
