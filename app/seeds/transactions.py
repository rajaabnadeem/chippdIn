from app.models import db, Group, UserGroup, Expense, Transaction, Comment


def seed_transactions():

    transaction1 = Transaction(amount=80, user_id=1, expense_id=1)
    transaction2 = Transaction(amount=80, user_id=3, expense_id=1)
    transaction3 = Transaction(amount=100, user_id=2, expense_id=2)
    transaction4 = Transaction(amount=100, user_id=3, expense_id=2)
    transaction5 = Transaction(amount=100, user_id=4, expense_id=2)
    transaction6 = Transaction(amount=40, user_id=1, expense_id=3)
    transaction7 = Transaction(amount=40, user_id=4, expense_id=3)
    transaction8 = Transaction(amount=50, user_id=3, expense_id=4)
    transaction9 = Transaction(amount=50, user_id=5, expense_id=4)
    transaction10 = Transaction(amount=50, user_id=6, expense_id=4)
    transaction11 = Transaction(amount=10, user_id=1, expense_id=5)
    transaction12 = Transaction(amount=10, user_id=2, expense_id=5)

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

    db.session.commit()


def undo_transactions():
    db.session.execute('TRUNCATE transactions;')
    db.session.commit()
