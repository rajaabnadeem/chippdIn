from flask import Blueprint
from flask_login import login_required
from app.models import Expense, Transaction, db, User
from app.forms import ExpenseForm
from flask import jsonify

transaction_routes = Blueprint('transactions', __name__)


@transaction_routes.route('/')
def getTransactions(user_id, group_id):
    expenses = Expense.query.filter(Expense.group_id == group_id).all()
    result = {}
    for expense in expenses:
        trans = Transaction.query.filter(
            Transaction.expense_id == expense.id).all()
        for tran in trans:
            getter = User.query.filter(User.id == expense.user_id).one()
            sender = User.query.filter(User.id == tran.user_id).one()
            print('this is the transaction:', tran.id)

            result[tran.id] = {
                "description": expense.description,
                "transactionAmount": tran.amount,
                "date": expense.date,
                "getter": getter.first_name,
                'sender': sender.first_name,
                'paid': tran.paid
            }
    return result
