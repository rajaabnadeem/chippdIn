from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import UserGroup, User
from app.forms import UserGroupForm 

user_group_routes = Blueprint('user_groups', __name__)


@user_group_routes.route('/', methods=["POST"])
def add_user_group(group_id):
    form = UserGroupForm()
    usergroup = UserGroup()
    email = form.email
    print('================')
    print(email)
    user = User.query.filter(User.email == email).one()
    usergroup.user_id = user_id
    usergroup.group_id = group_id
    db.session.add(comment)
    db.session.commit()
    user = User.query.filter(User.id == comment.user_id).one()
    return usergroup.to_dict()
