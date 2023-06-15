import { Sequelize, DataTypes } from 'sequelize';

const inTest = process.env.NODE_ENV === 'test';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: !inTest,
    storage: inTest ? 'memory' : './db.sqlite3'
})

export const History = sequelize.define('History', {
    firstArg: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    secondArg: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    result: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    error: {
        type: DataTypes.TEXT,
        allowNull: true
    }

});

export const Operation = sequelize.define('Operation', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Operation.hasMany(History)
History.belongsTo(Operation)

export async function createHistoryEntry({ firstArg, secondArg, operationName, result, error }) {
    const operation = await Operation.findOne({
        where: {
            name: operationName
        }
    });

    return History.create({
        firstArg,
        secondArg,
        result,
	error,
        OperationId: operation.id
    })
}

export function createTables() {
    return Promise.all([
        History.sync({ force: true }),
        Operation.sync({ force: true })
    ]);
}

export async function deleteFullHistory() {
    try {
        await History.destroy({
            where: {},
            truncate: true,
        });

        console.log('Historial eliminado exitosamente');
    } catch (error) {
        console.error('Error al eliminar el historial:', error);
        throw error;
    }
}

export async function obtenerHistorialBaseDatos() {
  try {
    const historial = await History.findAll({
      include: [Operation],
      order: [['createdAt', 'DESC']],
    });

    return historial;
  } catch (error) {
    console.error('Error al obtener el historial de la base de datos:', error);
    throw error;
  }
} 

