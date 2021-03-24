from flask import Blueprint, jsonify, session, request
from app.models import User, db, Group
from app.forms import GroupForm
from flask_login import login_required

group_routes = Blueprint('groups', __name__)


@group_routes.route('/')
def getGroups(user_id):
    groups = Group.query.filter(Group.user_id == user_id)
    return groups.to_dict()


@group_routes.route('/', methods=['POST'])
def createGroup(user_id):
    form = GroupForm()
    group = Group()
    form.populate_obj(group)
    group.user_id = val
    db.session.add(group)
    db.session.commit()
    return group.to_dict()


@group_routes.route('/', methods=['PUT'])
def editGroup(group_id):
    form = GroupForm()
    data = form.data()
    group = Group.query.find(Group.id == group_id).one()
    group.update().values(
        name=data['name'],
        type=data['type'],
        img_url=data['img_url']
    )
    db.session.add(group)
    db.session.commit()
    return group.to_dict()


@group_routes.route('/', methods=['DELETE'])
def deleteGroup(group_id):
    group = Group.query.find(Group.id == group_id).one()
    Group.remove(group)
    print(f'group with the id of ${group_id} has been removed')
    return group.to_dict()