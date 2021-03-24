from flask import Blueprint
from flask_login import login_required
from app.models import Expense, UserGroup, Transaction, db
from app.forms import ExpenseForm

expense_routes = Blueprint('expenses', __name__)


@expense_routes.route('/', methods=["POST"])
def createExpense(group_id, user_id):
    form = ExpenseForm()
    expense = Expense()
    form.populate_obj(expense)
    expense.group_id = group_id
    expense.user_id = user_id
    db.session.add(expense)
    db.session.commit()
    created_expense = expense.to_dict()
    total_expense = created_expense['amount']
    expense_id = created_expense["id"]

    group_users = UserGroup.query.filter(UserGroup.group_id == group_id).all()
    for group_user in group_users:
        transaction = Transaction()
        transaction.expense_id = expense_id
        transaction.user_id = group_user.user_id
        transaction.amount = total_expense / len(group_users)
        db.session.add(transaction)
    db.session.commit()
    return created_expense


# @expense_routes.route('/')
