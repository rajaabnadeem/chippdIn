from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

db = SQLAlchemy()


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(25), nullable=False)
    last_name = db.Column(db.String(25), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    balance = db.Column(db.Numeric(20, 2), default=0.00)
    hashed_password = db.Column(db.String(255), nullable=False)
    img_url = db.Column(db.String(2000))

    groups = db.relationship('Group', secondary='user_groups')
    expenses = db.relationship('Expense', back_populates='users')
    transactions = db.relationship('Transaction', back_populates='users')
    comments = db.relationship('Comment', back_populates='users')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "balance": self.balance,
            "img_url": self.img_url,
        }


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
    group_id = db.Column(db.Integer, db.ForeignKey('groups.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    user = db.relationship(User, backref=db.backref('user_groups'))
    group = db.relationship(Group, backref=db.backref('user_groups'))


class Expense(db.Model):
    __tablename__ = 'expenses'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(50), nullable=False)
    amount = db.Column(db.Numeric(20, 2), nullable=False)
    date = db.Column(db.Date, nullable=False)
    notes = db.Column(db.String(2000))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    group_id = db.Column(db.Integer, db.ForeignKey('groups.id'))

    users = db.relationship('User', back_populates='expenses')
    groups = db.relationship('Group', back_populates='expenses')
    transactions = db.relationship('Transaction', back_populates='expenses')
    comments = db.relationship('Comment', back_populates='expenses')


class Transaction(db.Model):
    __tablename__ = 'transactions'

    id = db.Column(db.Integer, primary_key=True)
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
    expenses = db.relationship('Expense', back_populates='comments')
