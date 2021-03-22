from app.models import db, Group, UserGroup, Expense, Transaction, Comment
from app.models import db

def seed_Group():

    group = Group(name='test', type='test',
                img_url='www.test.com')

    db.session.add(group)

    db.session.commit()


def undo_groups():
    db.session.execute('TRUNCATE groups;')
    db.session.commit()
