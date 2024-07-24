// SPDX-License-identifier: MIT

pragma solidity ^0.8.0
contract FarmerLoans {
    struct Loan {
        uint256 schemeId;
        address farmer;
        uint256 amount;
        bool isValidated;
        bool isPaid;
    }

    Loan[] public loans;

    event LoanApplied(uint256 indexed id, address indexed farmer, uint256 schemeId, uint256 amount);

    // Function to apply for a loan
    function applyForLoan(uint256 _schemeId, uint256 _amount) public {
        loans.push(Loan(_schemeId, msg.sender, _amount, false, false));
        emit LoanApplied(loans.length - 1, msg.sender, _schemeId, _amount);
    }

    // Function to get details of a loan
    function getLoan(uint256 _id) public view returns (uint256, address, uint256, bool, bool) {
        require(_id < loans.length, "Loan ID out of range");
        return (loans[_id].schemeId, loans[_id].farmer, loans[_id].amount, loans[_id].isValidated, loans[_id].isPaid);
    }
}
