// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GovernmentSchemes {
    struct Scheme {
        string name;
        string description;
        uint256 interestRate; // Interest rate in percent per month
        uint256 rebate; // Rebate amount in Wei
        uint256 expiryTimestamp; // Expiry timestamp of the scheme
    }

    Scheme[] public schemes;

    event SchemeAdded(uint256 indexed id, string name);
    event SchemeExpired(uint256 indexed id, string name);
    event LoanValidated(uint256 indexed loanId);

    // Function to add a new loan scheme
    function addScheme(string memory _name, string memory _description, uint256 _interestRate, uint256 _rebate, uint256 _expiryTimestamp) public {
        schemes.push(Scheme(_name, _description, _interestRate, _rebate, _expiryTimestamp));
        emit SchemeAdded(schemes.length - 1, _name);
    }

    // Function to remove expired loan schemes
    function removeExpiredSchemes() public {
        for (uint256 i = 0; i < schemes.length; i++) {
            if (block.timestamp >= schemes[i].expiryTimestamp) {
                emit SchemeExpired(i, schemes[i].name);
                delete schemes[i];
            }
        }
    }

    // Function to validate a loan
    function validateLoan(uint256 _loanId) public {
        // Additional validation can be added here, such as checking if the loan ID is valid
        emit LoanValidated(_loanId);
    }

    // Function to get details of a loan scheme
    function getScheme(uint256 _id) public view returns (string memory, string memory, uint256, uint256, uint256) {
        require(_id < schemes.length, "Scheme ID out of range");
        return (schemes[_id].name, schemes[_id].description, schemes[_id].interestRate, schemes[_id].rebate, schemes[_id].expiryTimestamp);
    }

    // Function to get the total count of schemes
    function getSchemeCount() public view returns (uint256) {
        return schemes.length;
    }
}
