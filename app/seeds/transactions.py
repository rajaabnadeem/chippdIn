from app.models.db import db, Group, UserGroup, Expense, Transaction, Comment


def seed_transactions():

    transaction1 = Transaction(amount=80, paid=False, user_id=1, expense_id=1)
    transaction2 = Transaction(amount=80, paid=True, user_id=2, expense_id=1)
    transaction3 = Transaction(amount=80, paid=False, user_id=3, expense_id=1)
    transaction4 = Transaction(amount=80, paid=True, user_id=1, expense_id=2)
    transaction5 = Transaction(amount=100, paid=False, user_id=2, expense_id=2)
    transaction6 = Transaction(amount=100, paid=False, user_id=3, expense_id=2)
    transaction7 = Transaction(amount=100, paid=False, user_id=4, expense_id=2)
    transaction8 = Transaction(amount=40, paid=False, user_id=1, expense_id=3)
    transaction9 = Transaction(amount=40, paid=False, user_id=4, expense_id=3)
    transaction10 = Transaction(amount=80, paid=True, user_id=5, expense_id=3)
    transaction11 = Transaction(amount=50, paid=False, user_id=3, expense_id=4)
    transaction12 = Transaction(amount=50, paid=False, user_id=5, expense_id=4)
    transaction13 = Transaction(amount=80, paid=True, user_id=1, expense_id=4)
    transaction14 = Transaction(amount=50, paid=False, user_id=6, expense_id=4)
    transaction15 = Transaction(amount=10, paid=False, user_id=1, expense_id=5)
    transaction16 = Transaction(amount=10, paid=False, user_id=2, expense_id=5)
    transaction17 = Transaction(amount=80, paid=True, user_id=3, expense_id=5)

    db.session.add(transaction1)
    db.session.add(transaction2)
    db.session.add(transaction3)
    db.session.add(transaction4)
    db.session.add(transaction5)
    db.session.add(transaction6)
    db.session.add(transaction7)
    db.session.add(transaction8)
    db.session.add(transaction9)
    db.session.add(transaction10)
    db.session.add(transaction11)
    db.session.add(transaction12)
    db.session.add(transaction13)
    db.session.add(transaction14)
    db.session.add(transaction15)
    db.session.add(transaction16)
    db.session.add(transaction17)

    db.session.commit()


def undo_transactions():
    db.session.execute('TRUNCATE transactions;')
    db.session.commit()
