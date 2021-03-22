from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(25), nullable = False)
  last_name = db.Column(db.String(25), nullable = False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  balance = db.Column(db.Numeric(20, 2), default=0.00)
  hashed_password = db.Column(db.String(255), nullable = False)
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
