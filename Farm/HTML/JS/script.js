// Import the ethers library
import { ethers } from "ethers";

// Contract addresses and ABIs
const GovernmentSchemesAddress = "0xa01A35dc6b2443d988541a390600cC0a7aE7E9E3";
const GovernmentSchemesABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_interestRate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rebate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_expiryTimestamp",
				"type": "uint256"
			}
		],
		"name": "addScheme",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "loanId",
				"type": "uint256"
			}
		],
		"name": "LoanValidated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "removeExpiredSchemes",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "SchemeAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "SchemeExpired",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_loanId",
				"type": "uint256"
			}
		],
		"name": "validateLoan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getScheme",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSchemeCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "schemes",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "interestRate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rebate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "expiryTimestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const FarmerLoansAddress = "0x3a50Ae7a402a4708399A570bdf955f81C5943494";
const FarmerLoansABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "farmer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "schemeId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "LoanApplied",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_schemeId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "applyForLoan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getLoan",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "loans",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "schemeId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "farmer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isValidated",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isPaid",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const GovernmentSchemesContract = new ethers.Contract(GovernmentSchemesAddress, GovernmentSchemesABI, signer);


// Initialize ethers and contracts
async function init() {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        window.GovernmentSchemesContract = new ethers.Contract(GovernmentSchemesAddress, GovernmentSchemesABI, signer);
        console.log(GovernmentSchemesContract); // Check if the contract is properly initialized
    } catch (error) {
        console.error("Error initializing contract:", error);
    }
}

// Function to handle farmer loan application
async function applyForLoan(schemeId, amount) {
    try {
        const FarmerLoansContract = new ethers.Contract(FarmerLoansAddress, FarmerLoansABI, signer);
        const tx = await FarmerLoansContract.applyForLoan(schemeId, amount);
        await tx.wait();
        alert("Loan application submitted successfully!");
    } catch (error) {
        console.error("Error applying for loan:", error);
        alert("Failed to submit loan application. Please try again.");
    }
}

// Function to upload a new loan scheme
async function uploadLoan() {
    try {
        const name = document.getElementById('loanName').value;
        const description = document.getElementById('loanDescription').value;
        const interestRate = document.getElementById('interestRate').value;
        const rebate = document.getElementById('rebate').value;
        const expiryTimestamp = document.getElementById('expiryTimestamp').value;

        // Call the addScheme function of the contract
        await GovernmentSchemesContract.addScheme(name, description, interestRate, rebate, expiryTimestamp);

        // Display success message
        window.alert("Loan scheme uploaded successfully!");
    } catch (error) {
        console.error("Error uploading loan scheme:", error);
        alert("Failed to upload loan scheme. Please try again.");
    }
}



// Function to fetch and display loan schemes for farmers
async function displayLoanSchemes() {
    try {
        const schemeCount = await GovernmentSchemesContract.getSchemeCount();
        const schemesElement = document.getElementById('schemes');
        schemesElement.innerHTML = ''; // Clear existing content
        for (let i = 0; i < schemeCount; i++) {
            const scheme = await GovernmentSchemesContract.getScheme(i);
            const schemeElement = document.createElement('div');
            schemeElement.innerHTML = `
                <h3>${scheme.name}</h3>
                <p>${scheme.description}</p>
                <p>Interest Rate: ${scheme.interestRate}% per month</p>
                <p>Rebate: ${ethers.utils.formatEther(scheme.rebate)} ETH</p>
                <button onclick="applyForLoan(${i}, 1000)">Apply for Loan</button>
            `;
            schemesElement.appendChild(schemeElement);
        }
    } catch (error) {
        console.error("Error fetching loan schemes:", error);
    }
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', async function() {
    await init(); // Initialize ethers and contracts
    displayLoanSchemes(); // Display loan schemes for farmers
});
