from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import UserGroup, User, db
from app.forms import UserGroupForm

user_group_routes = Blueprint('user_groups', __name__)


@user_group_routes.route('/', methods=["POST"])
def add_user_group(group_id):
    form = UserGroupForm()
    usergroup = UserGroup()
    email = form.data['email']
    user = User.query.filter(User.email == email).one()
    print('================')
    # print(user.to_dict())
    usergroup.user_id = user.id
    usergroup.group_id = group_id
    print(usergroup)
    db.session.add(usergroup)
    db.session.commit()
    # user = User.query.filter(User.id == usergroup.user_id).one()
    return usergroup.to_dict()
