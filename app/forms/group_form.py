from flask_wtf import FlaskForm
from wtforms import SelectField, StringField, DateField, IntegerField, SubmitField, TextAreaField
from wtforms.validators import DataRequired


class GroupForm(FlaskForm):

    choices = [('Apartment', 'Apartment'), ('House', 'House'),
               ('Vacation', 'Vacation'), ('Other', 'Other')]

    name = StringField('Name', [DataRequired()])
    type = SelectField('Type', choices=choices)
    img_url = StringField('Group Photo')
    submit = SubmitField('Create Group')
