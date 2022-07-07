import {Model, Column, Table, CreatedAt, UpdatedAt} from 'sequelize-typescript';

@Table //Decorator, lo que hace aca es determinar como se ejecutara User,
//en este caso viene a generar nuestra tabla de postgres.

export class User extends Model<User> {
    //generamos la clase User, que hereda todos los metodos de Model
    //en otras palabras, generamos el modelo.

    //ahora agregamos las columnas con su respectivo Decorator.
    @Column
    name!: string;

    @Column
    lastName!: string;

    @CreatedAt
    @Column
    createdAT!: Date;

    @UpdatedAt
    @Column
    updatedAT!: Date;
}

//Queda leer la documentacion sequelize-typescript para ver como hacer las relaciones.