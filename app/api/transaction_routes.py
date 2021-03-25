from flask import Blueprint
from flask_login import login_required
from app.models import Expense, Transaction, db
from app.forms import ExpenseForm
from flask import jsonify

transaction_routes = Blueprint('transactions', __name__)


@transaction_routes.route('/')
def getTransactions(user_id, group_id):
    expenses = Expense.query.filter(Expense.group_id == group_id).all()
    result = {}
    i = 0
    for expense in expenses:
        trans = Transaction.query.filter(
            Transaction.expense_id == exp.id).all()
        for tran in trans:
            result[i] = {
                "description": expense.description,
                "transactionAmount": tran.amount,
                "date": expense.date,
                "getter": expense.user_id,
                'sender': tran.user_id,
                'paid': tran.paid
            }

    return result
