import { DataTypes } from 'sequelize';
import { database } from '../../Config/database.js';

export const Comment = database.define(
  'comment',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    formatedCreatedAt: {
      type: DataTypes.VIRTUAL,
      get() {
        const value = this.getDataValue('createdAt');
        const day = ('0' + value.getDate()).slice(-2);
        const month = ('0' + (value.getMonth() + 1)).slice(-2);
        const year = value.getFullYear();
        const hours = ('0' + value.getHours()).slice(-2);
        const minutes = ('0' + value.getMinutes()).slice(-2);
        return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;
      },
    },
    formatedUpdatedAt: {
      type: DataTypes.VIRTUAL,
      get() {
        const value = this.getDataValue('updatedAt');
        const day = ('0' + value.getDate()).slice(-2);
        const month = ('0' + (value.getMonth() + 1)).slice(-2);
        const year = value.getFullYear();
        const hours = ('0' + value.getHours()).slice(-2);
        const minutes = ('0' + value.getMinutes()).slice(-2);
        return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;
      },
    },
  },
  { timestamps: true },
);
