import { DataTypes } from 'sequelize';
import { database } from '../../Config/database.js';

export const Order = database.define(
  'order',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING(50),
    },
    zipCode: {
      type: DataTypes.STRING(10),
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    comment: {
      type: DataTypes.STRING(200),
    },
    formatedCreatedAt: {
      type: DataTypes.VIRTUAL,
      get() {
        const value = this.getDataValue('createdAt');
        const day = ('0' + (value.getDate())).slice(-2);
        const month = ('0' + (value.getMonth()+1)).slice(-2);
        const year = value.getFullYear();
        const hours = ('0' + (value.getHours())).slice(-2);
        const minutes = ('0' + (value.getMinutes())).slice(-2);
        return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;
      },
    },
    formatedUpdatedAt: {
      type: DataTypes.VIRTUAL,
      get() {
        const value = this.getDataValue('updatedAt');
        const day = ('0' + (value.getDate())).slice(-2);
        const month = ('0' + (value.getMonth()+1)).slice(-2);
        const year = value.getFullYear();
        const hours = ('0' + (value.getHours())).slice(-2);
        const minutes = ('0' + (value.getMinutes())).slice(-2);
        return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes;
      },
    },
  },
  { timestamps: true },
);
