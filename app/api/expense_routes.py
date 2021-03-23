from flask import Blueprint
from flask_login import login_required

expense_routes = Blueprint('expense', __name__)

@expense_routes.route('/', methods=["POST"])
@login_required
    def createExpense():
        expense = Expense()
        return {"users": [user.to_dict() for user in users]}



@expense_routes.route('/')