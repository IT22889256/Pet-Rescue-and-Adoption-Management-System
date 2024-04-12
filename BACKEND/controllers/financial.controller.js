// controllers/financialController.js
const Financial = require('../modules/financial.model');
const Donation = require('../modules/donation.model');

exports.getBudget = async (req, res) => {
    try {
        // Calculate total income from donations
        const income = await Donation.aggregate([
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);

        // If there is no income, set it to 0
        const totalIncome = income.length > 0 ? income[0].total : 0;

        // Calculate total expenses
        const expenses = await Financial.aggregate([
            { $match: { type: 'expense' } },
            { $group: { _id: null, total: { $sum: '$amount' } } }
        ]);

        // If there are no expenses, set it to 0
        const totalExpenses = expenses.length > 0 ? expenses[0].total : 0;

        // Calculate the budget (income - expenses)
        const budget = totalIncome - totalExpenses;

        res.json({ budget });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = exports;
