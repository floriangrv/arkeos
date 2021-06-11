const client = require('../client');

class CoreModel {

    static tableName = null;
    static fields = null;
    dataValues = {};

    constructor(obj) {
        for (const prop in obj) {
            this.dataValues[prop] = obj[prop];
        }
    };

    /**
     * Setter pour les données de l'entité
     */
    set data(values) {
        for (const field of this.contructor.fields) {
            // values.birthdate ?
            if (values[field]) {
                //this.dataValues.birthdate = values.birthdate
                this.dataValues[field] = values[field];
            }
        }
    }

    static async find(option) {
        if (option === null) {
            option = "created_at";
        }
        const result = await client.query(`SELECT * FROM ${this.tableName} ORDER BY $1 ASC`, [option]);
        const instanceList = [];

        for (const row of result.rows) {
            instanceList.push(new this(row));
        }

        return instanceList;
    };

    static async findByPk(id) {
        const result = await client.query(`SELECT * FROM ${this.tableName} WHERE id = $1`, [id]);// AND deleted_at IS NULL

        if (!result.rows[0]) {
            return null;
        }
        return new this(result.rows[0]);
    };

    async insert() {

        const preparedQuery = {

            text: `
                SELECT * FROM add_${this.constructor.tableName}($1)
            `,
            values: [this.dataValues]
        };

        const result = await client.query(preparedQuery);
        this.dataValues = {...this.dataValues, ...result.rows[0]};
    };

    async update() {

        const preparedQuery = {

            text: `
                SELECT * FROM update_${this.constructor.tableName}($1)
            `,
            values: [this.dataValues]
        };

        const result = await client.query(preparedQuery);
        this.dataValues = result.rows[0];

    };

    async delete() {

        const preparedQuery = {

            text: `DELETE FROM "${this.constructor.tableName}" WHERE id = $1`/*`
                SELECT * FROM delete_${this.constructor.tableName}($1)
            `*/,
            values: [this.dataValues.id]
        };

        await client.query(preparedQuery);

    }

}

module.exports = CoreModel;