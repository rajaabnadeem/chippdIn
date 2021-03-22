from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


class Group(db.Model):
    __tablename__ = 'groups'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable=False)
    type = db.Column(db.String(20), nullable=False)
    img_url = db.Column(db.String(2000))


class UserGroup(db.Model):
    __tablename__ = 'user_groups'

    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey('groups.id') )
    user_id = db.Column(db.Integer, db.ForeignKey('users.id') )


class Expense(db.Model):
    __tablename__ = 'expenses'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(50), nullable=False)
    amount = db.Column(db.Decimal(20, 2), nullable=False)
    date = db.Column(db.Date, nullable=False)
    notes = db.Column(db.String(2000))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'))


class Transaction(db.Model):
    __tablename__ = 'transactions'

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    amount = db.Column(db.Decimal(20, 2), nullable=False)
    sender_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    getter_id = db.Column(db.Integer, db.ForeignKey('users.id'))
