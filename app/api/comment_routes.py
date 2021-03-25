from flask import Blueprint
from app.models import Comment, db, User


comment_routes =  Blueprint('comments', __name__)

@comment_routes.route('/')
def getComments(expense_id):
    comments = Comment.query.join(User).filter(Comment.expense_id == expense_id).all() 
    commentDict = {}
    for comment in comments:
        commentDict[comment.id] = comment.to_dict()
        commentDict[comment.id]['first_name'] = comment.users.first_name
        commentDict[comment.id]['last_name'] = comment.users.last_name
    return commentDict
