from flask import Blueprint
from app.models import Comment, db, User


comment_routes =  Blueprint('comments', __name__)

@comment_routes.route('/')
def getComments(expense_id):
    comments = db.session.query(Comment, User).join(User).filter(Comment.expense_id == expense_id).all() 
    # Comment.expense_id == expense_id and
    # users = User.query.all()

    commentDict = {}
    # print(comments.to_dict())
    for comment in comments:
        # print('Comment:::', comment.to_dict())
        print('Comment/User:::', comment.Comment.to_dict())
       
        # commentDict[comment.id] = comment.to_dict()
        # commentDict['first_name': comment.first_name]
        # commentDict['last_name': comment.User.last_name]

    return commentDict
