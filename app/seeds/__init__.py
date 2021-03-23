from flask.cli import AppGroup
from .users import seed_users, undo_users
from .groups import seed_groups, undo_groups
from .user_groups import seed_user_groups, undo_user_groups
from .expenses import seed_expenses, undo_expenses
from .transactions import seed_transactions, undo_transactions
from .comments import seed_comments, undo_comments

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_groups()
    seed_user_groups()
    seed_expenses()
    seed_transactions()
    seed_comments()

    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_comments()
    undo_transactions()
    undo_expenses()
    undo_undo_groups()
    undo_groups()
    undo_users()
    # Add other undo functions here
