# Smart Contract Debugger

## Overview
Smart Contract Debugger is an AI-powered tool designed to analyze and identify potential issues in smart contract code. It leverages advanced AI techniques to streamline the development process on aelf blockchain.


## Prerequisites

- Node.js
- Python
- Flask

## Installation

### Frontend

1. Clone the repository:
    ```bash
    git clone https://github.com/vishnusk2004/smart-contract-debugger.git
    cd smart-contract-debugger/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Change the backend URL for local development:
    Open `src/App.js` and update the backend URL to your local backend server URL:
    ```javascript
    const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ contract_code: contractCode }),
    });
    ```

4. Start the development server:
    ```bash
    npm start
    ```

### Backend

1. Navigate to the backend directory:
    ```bash
    cd ../backend
    ```

2. Create a virtual environment:
    ```bash
    python -m venv venv
    ```

3. Activate the virtual environment:
    - On Windows:
        ```bash
        venv\Scripts\activate
        ```
    - On macOS/Linux:
        ```bash
        source venv/bin/activate
        ```

4. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

5. Start the Flask server:
    ```bash
    python app.py
    ```

## Deployment
The frontend is deployed on Vercel and the backend is deployed on Render. The deployment links are as follows:
- **Frontend:** [smart-contract-debugger.vercel.app](https://smart-contract-debugger-aelf.vercel.app/)
- **Backend:** [smart-contract-debugger-backend.onrender.com](https://smart-contract-debugger-backend.onrender.com)


## Usage

1. Navigate to the frontend URL.
2. Enter your smart contract code in the textarea.
3. Click on "Analyze Contract".
4. View the analysis results.

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


## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the aelf team for the blockchain platform.
- AI models used in this project are based on TensorFlow and Google Cloud AI Platform.

