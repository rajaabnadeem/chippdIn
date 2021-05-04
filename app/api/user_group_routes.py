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
def get_user_groups():
    data = request.data
    j = json.loads(data)
    users_in_group = {}
    users = UserGroup.query.filter(UserGroup.group_id == j['groupId']).all()
    for user in users:
        users_in_group[user.id] = user.to_dict()
    return users_in_group
