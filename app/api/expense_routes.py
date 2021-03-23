from flask import Blueprint
from flask_login import login_required
from app.models import Expense, db
from app.forms import ExpenseForm

expense_routes = Blueprint('group', __name__)

@expense_routes.route('/', methods=["POST"])
def createExpense(group_id, user_id):
    form = ExpenseForm()
    expense = Expense()
    form.populate_obj(expense)
    db.session.add(expense)
    db.session.commit()
    return expense
    # return 'The group id is: ' + str(group_id) + ' The userid is: ' + str(user_id)



# @expense_routes.route('/')
