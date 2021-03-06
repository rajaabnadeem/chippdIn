from flask import Blueprint, jsonify, session, request
from app.models import User, db, Group, UserGroup
from app.forms import GroupForm
from flask_login import login_required

group_routes = Blueprint('groups', __name__)


@group_routes.route('/')
def getGroups(user_id):
    userGroups = UserGroup.query.join(Group).filter(
        UserGroup.user_id == user_id).all()
    groupsDict = {}
    for userGroup in userGroups:
        groupsDict[userGroup.group.id] = userGroup.group.to_dict()
    # userGroups = UserGroup.query.filter(UserGroup.user_id == user_id).all()
    # groupsDict = {}
    # for group in userGroups:
    #     newGroup = Group.query.find(
    #         Group.id == group.group_id)
    #     groupsDict[newGroup.id] = newGroup.to_dict()
    # print (groupsDict)
    return groupsDict


@group_routes.route('/', methods=['POST'])
def createGroup(user_id):
    form = GroupForm()
    group = Group()
    form.populate_obj(group)
    db.session.add(group)
    db.session.commit()
    userGroup = UserGroup()
    groupDict = group.to_dict()
    userGroup.group_id = groupDict['id']
    userGroup.user_id = user_id
    db.session.add(userGroup)
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
