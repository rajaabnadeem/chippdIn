from flask_sqlalchemy import SQLAlchemy
# from  .user import User
db = SQLAlchemy()


class Group(db.Model):
    __tablename__ = 'groups'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)
    type = db.Column(db.String(20), nullable=False)
    img_url = db.Column(db.String(2000))

    users = db.relationship('User', secondary='user_groups')
    expenses = db.relationship('Expense', back_populates='groups')

class UserGroup(db.Model):
    __tablename__ = 'user_groups'

    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey('groups.id') )
    user_id = db.Column(db.Integer, db.ForeignKey('users.id') )

    # user = db.relationship(User, backref=backref('user_groups'))
    # group = db.relationship(Group, backref=backref('user_groups'))


class Expense(db.Model):
    __tablename__ = 'expenses'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(50), nullable=False)
    amount = db.Column(db.Numeric(20, 2), nullable=False)
    date = db.Column(db.Date, nullable=False)
    notes = db.Column(db.String(2000))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'))

    users = db.relationship('User', back_populates='expenses')
    groups = db.relationship('Group', back_populates='expenses')
    transactions = db.relationship('Transaction', back_populates='expenses')

class Transaction(db.Model):
    __tablename__ = 'transactions'

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    amount = db.Column(db.Numeric(20, 2), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    expense_id = db.Column(db.Integer, db.ForeignKey('expenses.id'))

    users = db.relationship('User', back_populates='transactions')
    expenses = db.relationship('Expense', back_populates='transactions')

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(100))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    expense_id = db.Column(db.Integer, db.ForeignKey('expenses.id'))

    users = db.relationship('User', back_populates='comments')
    transactions = db.relationship('Transaction', back_populates='comments')
    


