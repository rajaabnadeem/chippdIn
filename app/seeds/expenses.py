from app.models.db import db, Group, UserGroup, Expense, Transaction, Comment
from faker import Faker

faker = Faker()


def seed_expenses():

    expenses1 = Expense(description="Electric", amount=240, date=faker.date(
        pattern='%m-%d-%Y', end_datetime=None), notes="Electric bill for January", group_id=1, user_id=2)
    expenses2 = Expense(description="Flights", amount=400, date=faker.date(
        pattern='%m-%d-%Y', end_datetime=None), notes="Flights to Arubaaaaa", group_id=2, user_id=1)
    expenses3 = Expense(description="Internet", amount=120, date=faker.date(
        pattern='%m-%d-%Y', end_datetime=None), notes="Comcast", group_id=3, user_id=5)
    expenses4 = Expense(description="Groceries", amount=200, date=faker.date(
        pattern='%m-%d-%Y', end_datetime=None), notes="Trip to Trader Joes", group_id=4, user_id=1)
    expenses5 = Expense(description="Uber", amount=30, date=faker.date(
        pattern='%m-%d-%Y', end_datetime=None), notes="Uber to bar", group_id=1, user_id=3)

    db.session.add(expenses1)
    db.session.add(expenses2)
    db.session.add(expenses3)
    db.session.add(expenses4)
    db.session.add(expenses5)

    db.session.commit()


def undo_expenses():
    db.session.execute('TRUNCATE expenses;')
    db.session.commit()
