from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, SubmitField, TextAreaField
from wtforms.validators import DataRequired


class ExpenseForm(FlaskForm):
    description = StringField('Description', [DataRequired()])
    amount = IntegerField('Amount', [DataRequired()])
    date = DateField('Date', [DataRequired()])
    notes = TextAreaField('Notes')
    submit = SubmitField('Create Expense')
