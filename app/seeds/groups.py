from app.models.db import db, Group, UserGroup, Expense, Transaction, Comment


def seed_groups():

    group1 = Group(name="3155 Broadway", type="Apartment", img_url=None)
    group2 = Group(name="Aruba", type="Vacation", img_url=None)
    group3 = Group(name="3731 Bates St.", type="House", img_url=None)
    group4 = Group(name="325 Coltart Ave.", type="Other", img_url=None)

    db.session.add(group1)
    db.session.add(group2)
    db.session.add(group3)
    db.session.add(group4)

    db.session.commit()


def undo_groups():
    db.session.execute('TRUNCATE groups;')
    db.session.commit()
