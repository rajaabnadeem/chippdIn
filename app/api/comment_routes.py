from flask import Blueprint
from app.models import Comment, db, User
from app.forms import CommentForm

comment_routes =  Blueprint('comments', __name__)

@comment_routes.route('/')
def getComments(expense_id, user_id):
    comments = Comment.query.join(User).filter(Comment.expense_id == expense_id).all()
    commentDict = {}
    for comment in comments:
        commentDict[comment.id] = comment.to_dict()
        commentDict[comment.id]['first_name'] = comment.users.first_name
        commentDict[comment.id]['last_name'] = comment.users.last_name
    return commentDict


@comment_routes.route('/', methods=['POST'])
def createComment(expense_id, user_id):
    form = CommentForm()
    comment = Comment()
    print(form.comment)
    form.populate_obj(comment)
    comment.user_id = user_id
    comment.expense_id = expense_id
    db.session.add(comment)
    db.session.commit()
    user = User.query.filter(User.id == comment.user_id).one()
    returnObj = comment.to_dict()
    returnObj['first_name'] = user.first_name
    returnObj['last_name'] = user.last_name
    return returnObj

# @comment.routes.route('/', methods=['DELETE'])
# def deleteComment(user_id):
