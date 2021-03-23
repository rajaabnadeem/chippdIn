"""please

Revision ID: 1194e2992368
Revises: 
Create Date: 2021-03-22 18:51:39.367433

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1194e2992368'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('groups',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=25), nullable=False),
    sa.Column('type', sa.String(length=20), nullable=False),
    sa.Column('img_url', sa.String(length=2000), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=25), nullable=False),
    sa.Column('last_name', sa.String(length=25), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('balance', sa.Numeric(precision=20, scale=2), nullable=True),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('img_url', sa.String(length=2000), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('expenses',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=50), nullable=False),
    sa.Column('amount', sa.Numeric(precision=20, scale=2), nullable=False),
    sa.Column('date', sa.Date(), nullable=False),
    sa.Column('notes', sa.String(length=2000), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('group_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['group_id'], ['groups.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_groups',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('group_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['group_id'], ['groups.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment', sa.String(length=100), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('expense_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['expense_id'], ['expenses.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('transactions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('amount', sa.Numeric(precision=20, scale=2), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('expense_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['expense_id'], ['expenses.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('transactions')
    op.drop_table('comments')
    op.drop_table('user_groups')
    op.drop_table('expenses')
    op.drop_table('users')
    op.drop_table('groups')
    # ### end Alembic commands ###
