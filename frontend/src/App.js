import React, { useState } from "react";
import "./App.css";

function App() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  async function handleAnalysis() {
    const contractCode = document.getElementById("contractCode").value;

    try {
      setIsLoading(true); // Start loading

      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contract_code: contractCode }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setAnalysisResult(data.result);
    } catch (error) {
      console.error("Failed to fetch:", error);
      setAnalysisResult({
        result: "Failed to fetch data from the server. Please try again.",
      });
    } finally {
      setIsLoading(false); // Stop loading
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Contract Analyzer</h1>
        <textarea
          id="contractCode"
          placeholder="Enter your smart contract code here"
        ></textarea>
        <button onClick={handleAnalysis} disabled={isLoading}>
          {isLoading ? "Analyzing..." : "Analyze Contract"}
        </button>
        {analysisResult && (
          <div className="result">
            <h2>Analysis Result:</h2>
            <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
