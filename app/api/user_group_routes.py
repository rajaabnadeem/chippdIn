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
    usergroup.user_id = user.id
    usergroup.group_id = group_id
    db.session.add(usergroup)
    db.session.commit()
    return usergroup.to_dict()
