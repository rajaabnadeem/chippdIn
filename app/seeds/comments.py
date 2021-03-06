from app.models import db, Group, UserGroup, Expense, Transaction, Comment


def seed_comments():

    comment1 = Comment(comment="Electric bill is high this month, sorry guys :(", user_id=2,expense_id=1)
    comment2 = Comment(comment="My paycheck is coming late for some reason, give me a few days!!", user_id=3, expense_id=1)
    comment3 = Comment(comment="Dang this was quite a lot, gotta turn lights off before we leave the house.", user_id=1, expense_id=1)
    comment4 = Comment(comment="Totally worth, see you guys in Aruba", user_id=4,expense_id=2)
    comment5 = Comment(comment="Yeah thanks for grabbing these tickets, looking forward to seeing y'all there!", user_id=4, expense_id=2)
    comment6 = Comment(comment="So smart to use chippdIn to split our internet costs!", user_id=1, expense_id=3)
    comment7 = Comment(comment="Yeah it's pretty great.", user_id=4, expense_id=3)
    comment8 = Comment(comment="Paid!", user_id=5, expense_id=3)
    comment9 = Comment(comment="Dang those tortilla wraps cost way too much.", user_id=3,expense_id=4)
    comment10 = Comment(comment="Grateful to have stocked up on avacados again", user_id=5,expense_id=4)
    comment11 = Comment(comment="Can you grab more beer next time?", user_id=6, expense_id=4)
    comment12 = Comment(comment="I'm walking to the bar next time", user_id=1, expense_id=5)
    comment13 = Comment(comment="Can you use a promo code next time to make the ride cheaper?",user_id=2, expense_id=5)

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.add(comment13)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments;')
    db.session.commit()
