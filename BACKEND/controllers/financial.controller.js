const Financial = require('../modules/financial.model');
const SponsorDonation = require('../modules/sponsordonation.model');
const RequestFunds = require('../modules/requestFunds.model');

exports.getBudget = async (req, res) => {
    try {
        // Calculate total income from donations
        const income = await SponsorDonation.aggregate([
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);

        // If there is no income, set it to 0
        const totalIncome = income.length > 0 ? income[0].total : 0;

        // Calculate total expenses from financial table
        const financialExpenses = await Financial.aggregate([
            { $match: { type: 'expense' } },
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);

        // If there are no financial expenses, set it to 0
        const totalFinancialExpenses = financialExpenses.length > 0 ? financialExpenses[0].total : 0;

        // Calculate total expenses from request funds table (when status is accepted)
        const requestFundsExpenses = await RequestFunds.aggregate([
            { $match: { status: 'accepted' } },
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);

        // If there are no request funds expenses, set it to 0
        const totalRequestFundsExpenses = requestFundsExpenses.length > 0 ? requestFundsExpenses[0].total : 0;

        // Calculate the total expenses (financial expenses + request funds expenses)
        const totalExpenses = totalFinancialExpenses + totalRequestFundsExpenses;

        // Calculate the budget (income - expenses)
        const budget = totalIncome - totalExpenses;

        res.json({ budget });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
   
module.exports = exports;

