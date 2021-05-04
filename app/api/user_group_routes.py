from flask import Blueprint, jsonify, session, request, json
from flask_login import login_required
from app.models import UserGroup, User, db
from app.forms import UserGroupForm

user_group_routes = Blueprint('user_groups', __name__)


@user_group_routes.route('/', methods=["POST"])
def add_user_group(group_id):
    form = UserGroupForm()
    usergroup = UserGroup()
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    usergroup.user_id = user.id
    usergroup.group_id = group_id
    db.session.add(usergroup)
    db.session.commit()
    return usergroup.to_dict()


@user_group_routes.route('/')
def get_user_groups(group_id):
    users_in_group = {}
    user_groups = UserGroup.query.filter(UserGroup.group_id == group_id).all()
    for user_group in user_groups:
        user = User.query.filter(User.id == user_group.user_id).first()
        users_in_group[user_group.id] = user.to_dict()
    return users_in_group
