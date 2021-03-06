from werkzeug.security import generate_password_hash
from app.models.db import db, Group, UserGroup, Expense, Transaction, Comment, User
from faker import Faker


faker = Faker()
# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(first_name='Demo', last_name='User', email="demo@user.com", balance=0, hashed_password=generate_password_hash('password'))
    user1 = User(first_name=faker.first_name(), last_name=faker.last_name(), email=faker.email(), balance=0, hashed_password=generate_password_hash('password'))
    user2 = User(first_name=faker.first_name(), last_name=faker.last_name(), email=faker.email(), balance=0, hashed_password=generate_password_hash('password'))
    user3 = User(first_name=faker.first_name(), last_name=faker.last_name(), email=faker.email(), balance=0, hashed_password=generate_password_hash('password'))
    user4 = User(first_name=faker.first_name(), last_name=faker.last_name(), email=faker.email(), balance=0, hashed_password=generate_password_hash('password'))
    user5 = User(first_name=faker.first_name(), last_name=faker.last_name(), email=faker.email(), balance=0, hashed_password=generate_password_hash('password'))

    db.session.add(demo)
    db.session.add(user1)
    db.session.add(user2)
    db.session.add(user3)
    db.session.add(user4)
    db.session.add(user5)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
